import React, { useState } from 'react';
import { LINKS } from '../../config/links';
import { ArrowUpRight, Menu, X, ShieldCheck } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#08090E]/80 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#B38914] via-[#F3C64F] to-[#D4AF37] p-[1px] shadow-lg shadow-[#D4AF37]/10">
            <div className="w-full h-full bg-[#0B0D14] rounded-[11px] flex items-center justify-center">
              <span className="text-[#F3C64F] font-black tracking-tighter text-lg group-hover:scale-105 transition-transform">JP</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg tracking-wider">JOPIPS<span className="text-[#D4AF37]">.</span></span>
            <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-medium">Forex & Gold Signals</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#signals" className="hover:text-white transition-colors">Signals</a>
          <a href="#performance" className="hover:text-white transition-colors">Performance</a>
          <a href="#broker" className="hover:text-white transition-colors">Partner Broker</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={LINKS.contactTelegram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
          >
            Contact Support
          </a>
          <a
            href={LINKS.trialTelegram}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-[#0B0D14] transition-all bg-gradient-to-r from-[#E5C07B] via-[#D4AF37] to-[#B38914] rounded-lg shadow-md shadow-[#D4AF37]/20 hover:brightness-110 active:scale-95"
          >
            Start 7-Day Free Trial
            <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0C13] border-b border-white/[0.08] px-6 py-6 space-y-4">
          <a href="#signals" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 text-sm">Signals</a>
          <a href="#performance" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 text-sm">Performance</a>
          <a href="#broker" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 text-sm">Partner Broker</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 text-sm">Pricing</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 text-sm">FAQ</a>
          <div className="pt-4 border-t border-white/[0.06] flex flex-col gap-3">
            <a
              href={LINKS.trialTelegram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 text-xs font-bold text-[#0B0D14] bg-[#D4AF37] rounded-lg"
            >
              Start 7-Day Free Trial
            </a>
          </div>
        </div>
      )}
    </header>
  );
};