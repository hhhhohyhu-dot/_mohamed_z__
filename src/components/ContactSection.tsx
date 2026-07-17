'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Share2, Mail, Send, CheckCircle, AlertCircle, Phone, User } from 'lucide-react';

const WA_LINK = 'https://wa.me/212602851147';
const IG_LINK = 'https://www.instagram.com/_mohamed_z__?igsh=MTVlaHk0dGI4d3FoOA==';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://formspree.io/f/xvgklzar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border"
            style={{
              background: 'rgba(124,58,237,0.1)',
              borderColor: 'rgba(124,58,237,0.3)',
              color: 'var(--violet-light)',
            }}
          >
            Get in Touch
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Let&apos;s{' '}
            <span className="grad-text">Work Together</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
            Have a project in mind? Reach out via WhatsApp for the fastest response.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — contact options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* WhatsApp */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp"
              className="flex items-center gap-5 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#25d366';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(37,211,102,0.15)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)', boxShadow: '0 8px 20px rgba(37,211,102,0.35)' }}
              >
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="font-bold text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>WhatsApp</p>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>Fastest response — click to chat now</p>
                <p className="text-sm font-semibold mt-1" style={{ color: '#25d366' }}>+212 602 851 147</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={IG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-instagram"
              className="flex items-center gap-5 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#dc2743';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(220,39,67,0.15)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, #f09433, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888)',
                  boxShadow: '0 8px 20px rgba(220,39,67,0.3)',
                }}
              >
                <Share2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="font-bold text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>Instagram</p>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>Follow for updates & portfolio</p>
                <p className="text-sm font-semibold mt-1" style={{ color: '#e6683c' }}>@mohamed_z_</p>
              </div>
            </a>

            {/* Email */}
            <div
              className="flex items-center gap-5 p-6 rounded-2xl"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)' }}
              >
                <Mail className="w-7 h-7" style={{ color: 'var(--violet-light)' }} />
              </div>
              <div>
                <p className="font-bold text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>Email</p>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>Or use the form on the right</p>
                <p className="text-sm font-semibold mt-1" style={{ color: 'var(--violet-light)' }}>
                  contact@mohamed-z.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl flex flex-col gap-5"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-name" className="text-sm font-semibold" style={{ color: 'var(--muted)' }}>
                <User className="w-3.5 h-3.5 inline mr-1" />
                Full Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={{
                  background: 'var(--surface-2)',
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
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className="text-sm font-semibold" style={{ color: 'var(--muted)' }}>
                <Mail className="w-3.5 h-3.5 inline mr-1" />
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={{
                  background: 'var(--surface-2)',
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
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-phone" className="text-sm font-semibold" style={{ color: 'var(--muted)' }}>
                <Phone className="w-3.5 h-3.5 inline mr-1" />
                Phone (Optional)
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+212 6XX XXX XXX"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={{
                  background: 'var(--surface-2)',
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
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="text-sm font-semibold" style={{ color: 'var(--muted)' }}>
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                style={{
                  background: 'var(--surface-2)',
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
            </div>

            {/* Submit */}
            <button
              id="contact-submit"
              type="submit"
              disabled={status === 'loading'}
              className="btn-glow w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>

            {/* Status messages */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium"
                style={{ background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)', color: '#25d366' }}
              >
                <CheckCircle className="w-4 h-4" />
                Message sent! I&apos;ll get back to you soon.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium"
                style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#ef4444' }}
              >
                <AlertCircle className="w-4 h-4" />
                Failed to send. Please try WhatsApp instead.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
