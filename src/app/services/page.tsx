'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Building2,
  GraduationCap,
  UtensilsCrossed,
  Stethoscope,
  ShoppingBag,
  Megaphone,
  Briefcase,
  Calendar,
  Star,
  ChevronDown,
  Check,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Shield,
  Gauge,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

const WA_LINK = 'https://wa.me/212602851147';

// ─── Services ──────────────────────────────────────────
const SERVICES = [
  {
    icon: Building2,
    title: 'Business Websites',
    desc: 'Professional corporate sites that build trust and convert visitors into clients.',
    color: '#7c3aed',
  },
  {
    icon: GraduationCap,
    title: 'School Websites',
    desc: 'Modern educational platforms with enrollment forms, news, and event management.',
    color: '#2563eb',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant Websites',
    desc: 'Stunning food sites with menus, reservations, and online ordering.',
    color: '#ea580c',
  },
  {
    icon: Stethoscope,
    title: 'Medical Websites',
    desc: 'Clean, trustworthy clinic & hospital sites with appointment booking.',
    color: '#16a34a',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce Stores',
    desc: 'Full online shops with product management, cart, and payment integration.',
    color: '#d946ef',
  },
  {
    icon: Megaphone,
    title: 'Landing Pages',
    desc: 'High-converting campaign pages optimized for maximum lead generation.',
    color: '#f59e0b',
  },
  {
    icon: Briefcase,
    title: 'Portfolio Websites',
    desc: 'Stunning personal portfolios for creators, designers, and freelancers.',
    color: '#06b6d4',
  },
  {
    icon: Calendar,
    title: 'Booking Systems',
    desc: 'Smart appointment and reservation systems for any service business.',
    color: '#ec4899',
  },
];

// ─── Portfolio ─────────────────────────────────────────
const PORTFOLIO = [
  {
    title: 'Luxe Restaurant',
    type: 'Restaurant Website',
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
  },
  {
    title: 'MediCare Clinic',
    type: 'Medical Website',
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
  },
  {
    title: 'ShopNova Store',
    type: 'E-commerce',
    src: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80',
  },
  {
    title: 'Creative Studio',
    type: 'Portfolio',
    src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
  },
  {
    title: 'Atlas Academy',
    type: 'School Website',
    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80',
  },
  {
    title: 'NexCorp Business',
    type: 'Business Website',
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
];

// ─── Testimonials ──────────────────────────────────────
const TESTIMONIALS = [
  {
    name: 'Karim El Mansouri',
    role: 'Restaurant Owner, Casablanca',
    text: 'Mohamed built our restaurant website in 3 days. The design is stunning and we get reservations daily through the site. Truly professional work!',
    rating: 5,
    avatar: 'KE',
  },
  {
    name: 'Fatima Zahra Alami',
    role: 'Clinic Director, Rabat',
    text: 'Our medical clinic now has a clean, trustworthy website that our patients love. The booking system works perfectly. Highly recommended!',
    rating: 5,
    avatar: 'FZ',
  },
  {
    name: 'Youssef Benali',
    role: 'E-commerce Entrepreneur',
    text: 'My online store went live and within a week I had my first sales. The design is premium and the site loads incredibly fast. 10/10!',
    rating: 5,
    avatar: 'YB',
  },
];

// ─── Pricing ───────────────────────────────────────────
const PLANS = [
  {
    name: 'Starter',
    price: '800',
    currency: 'MAD',
    period: 'one-time',
    desc: 'Perfect for small businesses and freelancers starting online.',
    features: [
      '1 Page Landing Site',
      'Mobile Responsive',
      'Contact Form',
      'WhatsApp Integration',
      '3 Revisions',
      '1 Week Delivery',
    ],
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '2,500',
    currency: 'MAD',
    period: 'one-time',
    desc: 'Full website for businesses that want to stand out online.',
    features: [
      'Up to 5 Pages',
      'Custom Design',
      'SEO Optimized',
      'Blog / News Section',
      'Booking System',
      'Social Media Integration',
      'Unlimited Revisions',
      '2 Week Delivery',
    ],
    popular: true,
    cta: 'Most Popular',
  },
  {
    name: 'Premium',
    price: '5,000',
    currency: 'MAD',
    period: 'one-time',
    desc: 'Enterprise-grade solution for e-commerce and complex platforms.',
    features: [
      'Unlimited Pages',
      'E-commerce / Store',
      'Payment Integration',
      'Admin Dashboard',
      'Advanced Animations',
      'Performance Optimized',
      'Priority Support',
      '3–4 Week Delivery',
    ],
    popular: false,
    cta: 'Go Premium',
  },
];

// ─── FAQ ───────────────────────────────────────────────
const FAQS = [
  {
    q: 'How long does it take to build my website?',
    a: 'Timeline depends on the complexity. A landing page takes 3–7 days, a full business site 1–2 weeks, and an e-commerce store 3–4 weeks. I always deliver on time.',
  },
  {
    q: 'Do you provide hosting and domain?',
    a: 'Yes! I can help you set up hosting (Vercel, Netlify, or cPanel) and register your domain. Hosting costs are handled separately based on your chosen provider.',
  },
  {
    q: 'Can I update my website after it\'s delivered?',
    a: 'Absolutely. I provide a simple content management system or clear documentation so you can easily update text, images, and products yourself.',
  },
  {
    q: 'Do you work with clients outside Morocco?',
    a: 'Yes! I work with clients worldwide. All communication is done via WhatsApp, email, or video call. Payment is accepted via bank transfer or PayPal.',
  },
  {
    q: 'What technologies do you use?',
    a: 'I use modern technologies including Next.js, React, TypeScript, Tailwind CSS, and Framer Motion for animations. Your site will be fast, secure, and SEO-ready.',
  },
  {
    q: 'Do you offer maintenance after delivery?',
    a: 'Yes! I offer optional monthly maintenance packages that include updates, security monitoring, and content changes. Ask me for details on WhatsApp.',
  },
];

// ─── FAQ Item ──────────────────────────────────────────
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="rounded-2xl overflow-hidden"
      style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
    >
      <button
        id={`faq-${index}`}
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200"
        style={{ color: 'var(--foreground)' }}
      >
        <span className="font-semibold pr-4">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5" style={{ color: 'var(--muted)' }} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main Page ─────────────────────────────────────────
export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Orbs */}
        <div
          className="orb-1 absolute top-1/3 right-1/4 w-[700px] h-[700px] rounded-full blur-[130px] pointer-events-none opacity-25"
          style={{ background: 'var(--violet)' }}
        />
        <div
          className="orb-2 absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none opacity-20"
          style={{ background: 'var(--fuchsia)' }}
        />
        <div className="grid-pattern absolute inset-0 opacity-20" />

        <div className="container relative z-10 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center mb-6"
          >
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold border"
              style={{
                background: 'rgba(124,58,237,0.1)',
                borderColor: 'rgba(124,58,237,0.3)',
                color: 'var(--violet-light)',
              }}
            >
              <Zap className="w-4 h-4" />
              AI-Powered Development
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none mb-6"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Professional{' '}
            <span className="grad-text">AI Website</span>
            <br />
            Development
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: 'var(--muted)' }}
          >
            Modern websites for businesses, schools, restaurants, clinics, portfolios,
            e-commerce and more — delivered fast and built to impress.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-cta"
              className="btn-glow px-8 py-4 rounded-full text-base font-bold flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Start Your Project
            </a>
            <a
              href="#pricing"
              id="hero-pricing-link"
              className="btn-ghost px-8 py-4 text-base font-bold flex items-center gap-2"
            >
              View Pricing
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Feature badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: Gauge, label: 'Fast Delivery' },
              { icon: Globe, label: 'SEO Optimized' },
              { icon: Shield, label: 'Secure & Modern' },
              { icon: Sparkles, label: 'Premium Design' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--muted)' }}
              >
                <Icon className="w-4 h-4" style={{ color: 'var(--violet-light)' }} />
                {label}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services ────────────────────────────────────── */}
      <section id="services" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2
              className="text-4xl md:text-5xl font-black mb-4"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              What I <span className="grad-text">Build</span>
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
              From simple landing pages to complex e-commerce platforms — I build it all.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="card-premium p-6 flex flex-col gap-4 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${svc.color}20`, border: `1px solid ${svc.color}40` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: svc.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      {svc.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {svc.desc}
                    </p>
                  </div>
                  <a
                    href={`${WA_LINK}?text=${encodeURIComponent(`Hi! I'm interested in a ${svc.title}. Can you tell me more?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`service-cta-${i}`}
                    className="mt-auto text-sm font-semibold flex items-center gap-1 transition-colors duration-200"
                    style={{ color: svc.color }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    Get a Quote <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Portfolio ────────────────────────────────────── */}
      <section id="portfolio" className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2
              className="text-4xl md:text-5xl font-black mb-4"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Recent <span className="grad-text">Work</span>
            </h2>
            <p style={{ color: 'var(--muted)' }}>A selection of websites I&apos;ve built for clients.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ border: '1px solid var(--border)', background: 'var(--background)' }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: 'rgba(124,58,237,0.7)', backdropFilter: 'blur(4px)' }}
                  >
                    <a
                      href={`${WA_LINK}?text=${encodeURIComponent(`Hi! I love "${project.title}" and want something similar for my business.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`portfolio-cta-${i}`}
                      onClick={e => e.stopPropagation()}
                      className="px-6 py-3 rounded-full text-sm font-bold text-white transition-transform hover:scale-105"
                      style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)' }}
                    >
                      I Want This
                    </a>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>{project.title}</h3>
                  <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>{project.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────── */}
      <section id="testimonials" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2
              className="text-4xl md:text-5xl font-black mb-4"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              What Clients <span className="grad-text">Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-premium p-7 flex flex-col gap-5"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 star fill-current" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--muted)' }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ background: 'var(--grad-brand)' }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────── */}
      <section id="pricing" className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2
              className="text-4xl md:text-5xl font-black mb-4"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Transparent <span className="grad-text">Pricing</span>
            </h2>
            <p style={{ color: 'var(--muted)' }}>
              No hidden fees. Pay once, own your website forever.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-8 flex flex-col gap-6 relative ${
                  plan.popular ? 'ring-2' : ''
                }`}
                style={{
                  background: plan.popular ? 'var(--surface-3)' : 'var(--background)',
                  border: plan.popular ? 'none' : '1px solid var(--border)',
                  ...(plan.popular ? { ringColor: 'var(--violet)' } : {}),
                  boxShadow: plan.popular ? '0 0 0 2px var(--violet), 0 20px 60px var(--violet-glow)' : 'none',
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="badge-popular">⭐ Most Popular</span>
                  </div>
                )}
                <div>
                  <h3
                    className="text-xl font-black mb-1"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>{plan.desc}</p>
                </div>

                <div className="flex items-end gap-1">
                  <span
                    className="text-5xl font-black"
                    style={{ fontFamily: 'Outfit, sans-serif', color: plan.popular ? 'var(--violet-light)' : 'var(--foreground)' }}
                  >
                    {plan.price}
                  </span>
                  <div className="mb-2">
                    <span className="text-lg font-bold" style={{ color: 'var(--muted)' }}>
                      {plan.currency}
                    </span>
                    <p className="text-xs" style={{ color: 'var(--muted-2)' }}>{plan.period}</p>
                  </div>
                </div>

                <ul className="flex flex-col gap-3">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(124,58,237,0.15)' }}
                      >
                        <Check className="w-3 h-3" style={{ color: 'var(--violet-light)' }} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={`${WA_LINK}?text=${encodeURIComponent(`Hi! I'm interested in the ${plan.name} plan (${plan.price} ${plan.currency}). Let's talk!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`pricing-cta-${i}`}
                  className={`${
                    plan.popular ? 'btn-glow' : 'btn-ghost'
                  } w-full py-3.5 rounded-xl font-semibold text-center flex items-center justify-center gap-2`}
                >
                  <MessageCircle className="w-4 h-4" />
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 text-sm"
            style={{ color: 'var(--muted)' }}
          >
            All prices are negotiable. Contact me on WhatsApp for a custom quote.
          </motion.p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section id="faq" className="section">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2
              className="text-4xl md:text-5xl font-black mb-4"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Frequently Asked <span className="grad-text">Questions</span>
            </h2>
          </motion.div>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA Banner ─────────────────────────── */}
      <section className="section-sm">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden p-12 text-center"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            {/* Glow */}
            <div
              className="absolute inset-0 opacity-30"
              style={{ background: 'var(--grad-brand)', filter: 'blur(60px)', transform: 'scale(0.8)' }}
            />
            <div className="relative z-10">
              <Sparkles className="w-8 h-8 mx-auto mb-4" style={{ color: 'var(--violet-light)' }} />
              <h2
                className="text-3xl md:text-4xl font-black mb-4"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Ready to Launch Your <span className="grad-text">Website?</span>
              </h2>
              <p className="mb-8 max-w-lg mx-auto" style={{ color: 'var(--muted)' }}>
                Send a message on WhatsApp and let&apos;s start building your dream website today.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-banner-whatsapp"
                className="btn-glow inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────── */}
      <ContactSection />

      {/* ── Footer ───────────────────────────────────────── */}
      <Footer />
    </>
  );
}
