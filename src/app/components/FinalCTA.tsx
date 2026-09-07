import React from 'react';
import { LINKS } from '../../config/links';
import { ArrowRight, Send } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-[#07090E] relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#E5C07B] text-xs font-semibold">
          <Send className="w-3.5 h-3.5" /> Direct Telegram Access
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Ready to Transform Your Trading Consistency?
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Join thousands of smart traders taking daily high-probability setups. Claim your 7-day trial now with no commitment.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={LINKS.trialTelegram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#E5C07B] via-[#D4AF37] to-[#B38914] text-[#0B0D14] flex items-center justify-center gap-2 shadow-xl shadow-[#D4AF37]/20 hover:brightness-110 active:scale-95 transition-all"
          >
            Start Free 7-Day Trial
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={LINKS.contactTelegram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-xs uppercase tracking-wider text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all"
          >
            Message On Telegram
          </a>
        </div>

        {/* Risk Disclaimer */}
        <p className="text-[11px] text-zinc-600 max-w-2xl mx-auto pt-8">
          Risk Warning: Trading Foreign Exchange (Forex) and Contracts for Difference (CFDs) carries a high level of risk and may not be suitable for all investors. Past performance is no guarantee of future results.
        </p>

      </div>
    </section>
  );
};