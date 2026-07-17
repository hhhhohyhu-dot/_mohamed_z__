'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download, MessageCircle, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useCallback } from 'react';
import { GalleryItem } from '@/data/gallery';

const WA_LINK = 'https://wa.me/212602851147';

interface LightboxProps {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ item, onClose, onPrev, onNext }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  const buyOnWA = () => {
    const msg = encodeURIComponent(
      `Hello! I'm interested in buying "${item.title}" (${item.price}) from your gallery. 🖼️`
    );
    window.open(`${WA_LINK}?text=${msg}`, '_blank');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="lightbox-overlay"
        onClick={onClose}
      >
        {/* Content wrapper */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={e => e.stopPropagation()}
          className="relative w-full max-w-5xl mx-4 flex flex-col"
          style={{ maxHeight: '90vh' }}
        >
          {/* Image */}
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/3"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
          </div>

          {/* Info bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-1"
          >
            <div>
              <h3 className="text-2xl font-black" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {item.title}
              </h3>
              <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>{item.description}</p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="text-2xl font-black grad-text">{item.price}</span>
              {item.price === 'Free' ? (
                <a
                  href={item.src}
                  download={`${item.title}.jpg`}
                  id={`lightbox-download-${item.id}`}
                  className="btn-glow px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Free
                </a>
              ) : (
                <button
                  id={`lightbox-buy-${item.id}`}
                  onClick={buyOnWA}
                  className="btn-glow px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Buy via WhatsApp
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Close button */}
        <button
          id="lightbox-close"
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Prev / Next buttons */}
        <button
          id="lightbox-prev"
          onClick={e => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          id="lightbox-next"
          onClick={e => { e.stopPropagation(); onNext(); }}
          aria-label="Next image"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Open full size */}
        <a
          href={item.src}
          target="_blank"
          rel="noopener noreferrer"
          id="lightbox-fullsize"
          className="absolute top-4 right-16 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}
          aria-label="Open full size"
        >
          <ExternalLink className="w-4 h-4 text-white" />
        </a>
      </motion.div>
    </AnimatePresence>
  );
}
