'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/#gallery', label: 'Gallery' },
  { href: '/services', label: 'Website Services' },
  { href: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass border-b border-[var(--border)]' : 'bg-transparent border-b border-transparent'
        }`}
        style={{ height: 'var(--navbar-h)' }}
      >
        <div className="container h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'var(--grad-brand)' }}>
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span
              className="text-xl font-black tracking-tight grad-text"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              mohamed_z_
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'grad-text'
                      : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              id="theme-toggle"
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[var(--surface-2)] border border-[var(--border)]"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[var(--muted)]" />
              ) : (
                <Moon className="w-4 h-4 text-[var(--muted)]" />
              )}
            </button>

            {/* CTA */}
            <Link
              href="/services"
              id="nav-cta"
              className="hidden md:flex btn-glow px-5 py-2 text-sm font-semibold rounded-full"
            >
              Get a Website
            </Link>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle mobile menu"
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border)] hover:bg-[var(--surface-2)] transition"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mobile-menu"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Logo in menu */}
              <span className="text-3xl font-black grad-text mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                mohamed_z_
              </span>
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-bold text-[var(--foreground)] hover:text-[var(--violet-light)] transition-colors"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-4"
              >
                <Link
                  href="/services"
                  onClick={() => setMenuOpen(false)}
                  className="btn-glow px-8 py-3 text-base font-semibold rounded-full"
                >
                  Get a Website
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
