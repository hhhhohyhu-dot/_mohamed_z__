'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageCircle, Download, ZoomIn, Tag } from 'lucide-react';
import { GalleryItem } from '@/data/gallery';

interface GalleryCardProps {
  item: GalleryItem;
  onOpen: (item: GalleryItem) => void;
  index: number;
}

const WA_LINK = 'https://wa.me/212602851147';

export default function GalleryCard({ item, onOpen, index }: GalleryCardProps) {
  const buyOnWA = (e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = encodeURIComponent(
      `Hello! I'm interested in buying "${item.title}" (${item.price}) from your gallery. 🖼️`
    );
    window.open(`${WA_LINK}?text=${msg}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
      onClick={() => onOpen(item)}
      id={`gallery-card-${item.id}`}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        border: '1px solid var(--border)',
        background: 'var(--surface)',
      }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.src}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Dark overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }}
        />

        {/* Zoom icon */}
        <div
          className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100"
          style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}
        >
          <ZoomIn className="w-4 h-4 text-white" />
        </div>

        {/* Price badge */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold"
          style={
            item.price === 'Free'
              ? { background: 'rgba(37,211,102,0.9)', color: 'white' }
              : { background: 'rgba(124,58,237,0.9)', color: 'white', backdropFilter: 'blur(10px)' }
          }
        >
          {item.price}
        </div>

        {/* Hover actions overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-bold text-base leading-tight">{item.title}</h3>
              <p className="text-white/70 text-xs mt-0.5">{item.description}</p>
            </div>
            {item.price === 'Free' ? (
              <a
                href={item.src}
                download={`${item.title}.jpg`}
                id={`card-download-${item.id}`}
                onClick={e => e.stopPropagation()}
                className="ml-3 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'rgba(37,211,102,0.9)' }}
                aria-label="Download free"
              >
                <Download className="w-4 h-4 text-white" />
              </a>
            ) : (
              <button
                id={`card-buy-${item.id}`}
                onClick={buyOnWA}
                className="ml-3 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
                aria-label="Buy via WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div className="p-4 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-sm leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {item.title}
          </h3>
          <div className="flex items-center gap-1 mt-1">
            <Tag className="w-3 h-3" style={{ color: 'var(--muted-2)' }} />
            <span className="text-xs capitalize" style={{ color: 'var(--muted)' }}>
              {item.category}
            </span>
          </div>
        </div>
        <span
          className="font-black text-sm grad-text"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          {item.price}
        </span>
      </div>
    </motion.div>
  );
}
