'use client';

import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Sparkles, ArrowDown, ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GalleryCard from '@/components/GalleryCard';
import Lightbox from '@/components/Lightbox';
import ContactSection from '@/components/ContactSection';
import { GALLERY_ITEMS, CATEGORIES, GalleryItem, Category } from '@/data/gallery';

const ITEMS_PER_PAGE = 8;

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [search, setSearch] = useState('');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const loaderRef = useRef<HTMLDivElement>(null);

  // Filtered items
  const filtered = useMemo(() => {
    return GALLERY_ITEMS.filter(item => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const matchSearch =
        search.trim() === '' ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  const visible = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const hasMore = visibleCount < filtered.length;

  // Infinite scroll with IntersectionObserver
  useEffect(() => {
    const el = loaderRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore) {
          setVisibleCount(c => c + ITEMS_PER_PAGE);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasMore]);

  // Reset visible count on filter/search change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [activeCategory, search]);

  // Lightbox navigation
  const lightboxIndex = lightboxItem ? filtered.findIndex(i => i.id === lightboxItem.id) : -1;
  const openLightbox = useCallback((item: GalleryItem) => setLightboxItem(item), []);
  const closeLightbox = useCallback(() => setLightboxItem(null), []);
  const prevLightbox = useCallback(() => {
    if (lightboxIndex <= 0) return;
    setLightboxItem(filtered[lightboxIndex - 1]);
  }, [lightboxIndex, filtered]);
  const nextLightbox = useCallback(() => {
    if (lightboxIndex >= filtered.length - 1) return;
    setLightboxItem(filtered[lightboxIndex + 1]);
  }, [lightboxIndex, filtered]);

  return (
    <>
      <Navbar />

      {/* ─── Hero ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background orbs */}
        <div
          className="orb-1 absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-30"
          style={{ background: 'var(--violet)' }}
        />
        <div
          className="orb-2 absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none opacity-25"
          style={{ background: 'var(--fuchsia)' }}
        />
        <div
          className="orb-3 absolute top-3/4 left-3/4 w-[300px] h-[300px] rounded-full blur-[80px] pointer-events-none opacity-20"
          style={{ background: 'var(--gold)' }}
        />

        {/* Grid pattern */}
        <div className="grid-pattern absolute inset-0 opacity-20" />

        {/* Content */}
        <div className="container relative z-10 text-center pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            <span className="grad-text">mohamed_z_</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: 'var(--muted)' }}
          >
            Discover stunning 4K artwork — nature, cars, anime, portraits, fantasy and more.
            Download or purchase instantly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#gallery"
              id="hero-explore-btn"
              className="btn-glow px-8 py-4 rounded-full text-base font-bold flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Explore Gallery
            </a>
            <a
              href="/services"
              id="hero-services-btn"
              className="btn-ghost px-8 py-4 text-base font-bold flex items-center gap-2"
            >
              Website Services
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-20 flex flex-wrap justify-center gap-12"
          >
            {[
              { value: '4K', label: 'Resolution' },
              { value: `${GALLERY_ITEMS.length}+`, label: 'Artworks' },
              { value: '8', label: 'Categories' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl font-black grad-text"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {stat.value}
                </div>
                <div className="text-sm mt-1" style={{ color: 'var(--muted)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5" style={{ color: 'var(--muted-2)' }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Gallery ──────────────────────────────────── */}
      <section id="gallery" className="section">
        <div className="container">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl md:text-5xl font-black mb-4"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              The <span className="grad-text">Gallery</span>
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
              All images are in 4K quality.
            </p>
          </motion.div>

          {/* Search + Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5 mb-10"
          >
            {/* Search bar */}
            <div
              className="relative max-w-lg mx-auto w-full"
            >
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ color: 'var(--muted)' }}
              />
              <input
                id="gallery-search"
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search artworks..."
                className="w-full pl-11 pr-10 py-3.5 rounded-2xl text-sm outline-none transition-all duration-200"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border-2)',
                  color: 'var(--foreground)',
                }}
                onFocus={e => {
                  e.target.style.borderColor = 'var(--violet)';
                  e.target.style.boxShadow = '0 0 0 3px var(--violet-glow)';
                }}
                onBlur={e => {
                  e.target.style.borderColor = 'var(--border-2)';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center transition hover:bg-white/10"
                >
                  <X className="w-3.5 h-3.5" style={{ color: 'var(--muted)' }} />
                </button>
              )}
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.value}
                  id={`filter-${cat.value}`}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`filter-pill ${activeCategory === cat.value ? 'active' : ''}`}
                >
                  <span className="mr-1">{cat.emoji}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              Showing <span className="font-semibold" style={{ color: 'var(--foreground)' }}>{visible.length}</span> of{' '}
              <span className="font-semibold" style={{ color: 'var(--foreground)' }}>{filtered.length}</span> results
            </p>
            {(search || activeCategory !== 'all') && (
              <button
                onClick={() => { setSearch(''); setActiveCategory('all'); }}
                className="text-sm flex items-center gap-1.5 transition-colors"
                style={{ color: 'var(--violet-light)' }}
              >
                <X className="w-3.5 h-3.5" />
                Clear filters
              </button>
            )}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            {visible.length > 0 ? (
              <motion.div
                key={`${activeCategory}-${search}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              >
                {visible.map((item, i) => (
                  <GalleryCard key={item.id} item={item} onOpen={openLightbox} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24"
              >
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-2">No results found</h3>
                <p style={{ color: 'var(--muted)' }}>Try a different search or filter.</p>
                <button
                  onClick={() => { setSearch(''); setActiveCategory('all'); }}
                  className="btn-glow mt-6 px-6 py-3 rounded-full text-sm font-semibold"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Infinite scroll loader */}
          <div ref={loaderRef} className="h-10 mt-8 flex items-center justify-center">
            {hasMore && (
              <div className="flex gap-1.5">
                {[0, 1, 2].map(i => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                    className="w-2 h-2 rounded-full"
                    style={{ background: 'var(--violet)' }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── Contact ──────────────────────────────────── */}
      <ContactSection />

      {/* ─── Footer ───────────────────────────────────── */}
      <Footer />

      {/* ─── Lightbox ─────────────────────────────────── */}
      {lightboxItem && (
        <Lightbox
          item={lightboxItem}
          onClose={closeLightbox}
          onPrev={prevLightbox}
          onNext={nextLightbox}
        />
      )}
    </>
  );
}
