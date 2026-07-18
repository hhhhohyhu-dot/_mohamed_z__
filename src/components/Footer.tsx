import Link from 'next/link';
import { Share2, MessageCircle, Mail, Zap } from 'lucide-react';

const WA_LINK = 'https://wa.me/212602851147';
const IG_LINK = 'https://www.instagram.com/_mohamed_z__?igsh=MTVlaHk0dGI4d3FoOA==';
const EMAIL = 'mailto:contact@mohamed-z.com';

export default function Footer() {
  return (
    <footer
      className="relative border-t overflow-hidden"
      style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full opacity-20 blur-[80px] pointer-events-none"
        style={{ background: 'var(--grad-brand)' }}
      />

      <div className="container relative z-10 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--grad-brand)' }}
              >
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span
                className="text-xl font-black grad-text"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                mohamed_z_
              </span>
            </Link>
            <p className="text-sm text-center md:text-left" style={{ color: 'var(--muted)' }}>
              Premium photography &amp; professional website development.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--muted-2)' }}>
              Connect
            </p>
            <div className="flex items-center gap-4">
              <a
                href={IG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, #f09433, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888)',
                  boxShadow: '0 4px 20px rgba(220,39,67,0.3)',
                }}
              >
                <Share2 className="w-5 h-5 text-white" />
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, #25d366, #128c7e)',
                  boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
                }}
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a
                href={EMAIL}
                id="footer-email"
                aria-label="Email"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 border"
                style={{
                  background: 'var(--surface-2)',
                  borderColor: 'var(--border-2)',
                  color: 'var(--muted)',
                }}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col items-center md:items-end gap-2">
            {[
              { href: '/', label: 'Home' },
              { href: '/#gallery', label: 'Gallery' },
              { href: '/services', label: 'Website Services' },
              { href: '/#contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--foreground)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: '1px solid var(--border)', color: 'var(--muted-2)' }}
        >
          <p>© 2026 <span className="grad-text font-semibold">mohamed_z_</span>. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
}
