import React from 'react';
import { LINKS } from '../../config/links';
import { Check, ArrowRight, Star } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-[#07090E] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider">Transparent Access</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Start Free. Upgrade When You Profit.</h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Test our precision on a demo or live account with zero obligations during your 7-day trial.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Free Trial Card */}
          <div className="rounded-3xl bg-[#0C0F17] border border-white/[0.08] p-8 sm:p-10 flex flex-col justify-between hover:border-white/[0.15] transition-all">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Free Pass</span>
                <h3 className="text-2xl font-bold text-white">7-Day Telegram Trial</h3>
                <p className="text-zinc-400 text-xs">Experience live signal quality with no payment information required.</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-white">$0</span>
                <span className="text-zinc-500 text-xs font-medium">/ 7 days</span>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/[0.06] text-xs text-zinc-300">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span>2–4 Daily High-Probability Signals</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span>Forex Majors & Gold (XAU/USD)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span>Full SL & TP Setup Instructions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span>Access to General Community Channel</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href={LINKS.trialTelegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block py-4 text-center text-xs font-bold rounded-xl text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all"
              >
                Join Free Trial Group
              </a>
            </div>
          </div>

          {/* VIP Premium Card */}
          <div className="rounded-3xl bg-gradient-to-b from-[#151926] via-[#0E121B] to-[#0A0D15] border-2 border-[#D4AF37] p-8 sm:p-10 flex flex-col justify-between relative shadow-2xl shadow-[#D4AF37]/10">
            
            <div className="absolute -top-3.5 right-8 bg-gradient-to-r from-[#E5C07B] to-[#B38914] text-[#0B0D14] text-[10px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full shadow">
              Most Popular
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#D4AF37]" /> Full Institutional Access
                </span>
                <h3 className="text-2xl font-bold text-white">VIP Inner Circle</h3>
                <p className="text-zinc-400 text-xs">Direct access to the lead trader's full trading portfolio and instant live updates.</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-white">Contact Us</span>
                <span className="text-zinc-400 text-xs font-medium">/ Flexible Membership</span>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/[0.06] text-xs text-zinc-200">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span><strong>Unlimited Daily Signals</strong> (All London & NY setups)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span><strong>Live Trade Management</strong> (Break-even & partial alerts)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span><strong>Exclusive Gold Scalps</strong> & High-volume News Trades</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span><strong>1-on-1 Direct Support</strong> with Joseph Chacko</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href={LINKS.vipTelegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 text-center text-xs font-bold rounded-xl text-[#0B0D14] bg-gradient-to-r from-[#E5C07B] via-[#D4AF37] to-[#B38914] shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 active:scale-95 transition-all"
              >
                Inquire for VIP Access
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};