import React from 'react';
import { LINKS } from '../config/links';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrokerSection } from './components/BrokerSection';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Mail, Send } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090E] text-zinc-100 font-sans selection:bg-[#D4AF37] selection:text-black">
      <Header />
      <main>
        <Hero />
        <BrokerSection />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      
      {/* Footer with updated contact info */}
      <footer className="py-12 bg-[#05060A] border-t border-white/[0.06] text-center text-xs text-zinc-400 space-y-4">
        <div className="flex flex-wrap justify-center items-center gap-6">
          <a 
            href={LINKS.contactTelegram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors font-medium"
          >
            <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
            Telegram: @josephchacko16
          </a>
          <span className="text-zinc-600">•</span>
          <a 
            href={`mailto:${LINKS.email}`} 
            className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors font-medium"
          >
            <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
            josephchacko166@gmail.com
          </a>
        </div>
        <p className="text-zinc-600 text-[11px]">© {new Date().getFullYear()} JOPIPS. All rights reserved.</p>
      </footer>
    </div>
  );
}