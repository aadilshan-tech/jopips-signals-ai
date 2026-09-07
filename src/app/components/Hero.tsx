import React from 'react';
import { LINKS } from '../../config/links';
import { ArrowRight, ShieldCheck, Zap, TrendingUp, CheckCircle, BellRing } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#07090E]">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D4AF37]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[#E5C07B] font-semibold">London & NY Session</span>
              <span className="text-zinc-500">•</span>
              <span>Live Signals Active</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Institutional-grade <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7DF94] via-[#D4AF37] to-[#B38914]">
                Forex & Gold Signals.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Stop guessing market entries. Receive real-time high-probability setups with exact Entry, Take-Profit, and Stop-Loss levels sent straight to your Telegram.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={LINKS.trialTelegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-[#E5C07B] via-[#D4AF37] to-[#B38914] text-[#0B0D14] flex items-center justify-center gap-2 shadow-xl shadow-[#D4AF37]/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                Join Free 7-Day Trial
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={LINKS.brokerSignup}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-sm text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center gap-2 transition-all"
              >
                Recommended Broker
              </a>
            </div>

            {/* Quick Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>87% Historical Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>Strict 1:2+ Risk/Reward</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>Zero Card Required</span>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Interactive Signal Card Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-2xl bg-gradient-to-b from-white/[0.12] to-white/[0.02] p-[1px] shadow-2xl">
              <div className="rounded-[15px] bg-[#0C0F17] p-6 space-y-6">
                
                {/* Header with Live Signal Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-base">XAU/USD</span>
                        <span className="px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase bg-emerald-500/20 text-emerald-400 rounded">
                          BUY NOW
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400">Gold Spot • 15m Scalp</p>
                    </div>
                  </div>
                  <BellRing className="w-4 h-4 text-[#D4AF37]" />
                </div>

                {/* Signal Metrics Grid */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Entry</span>
                    <span className="text-sm font-bold text-white">2,872.50</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Stop Loss</span>
                    <span className="text-sm font-bold text-rose-400">2,865.00</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Target (TP2)</span>
                    <span className="text-sm font-bold text-emerald-400">2,892.00</span>
                  </div>
                </div>

                {/* Progress bar visual */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-zinc-400">Trade Status</span>
                    <span className="text-emerald-400 font-semibold">+85 Pips Secured</span>
                  </div>
                  <div className="w-full h-2 bg-white/[0.05] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-[#D4AF37] w-[80%]" />
                  </div>
                </div>

                {/* Notification Preview Footer */}
                <div className="pt-2 flex items-center justify-between text-xs text-zinc-400 border-t border-white/[0.06]">
                  <span className="flex items-center gap-1.5 text-[11px]">
                    <Zap className="w-3.5 h-3.5 text-[#D4AF37]" /> Dispatched instantly via Telegram
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">2m ago</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};