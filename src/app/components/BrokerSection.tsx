import React from 'react';
import { LINKS } from '../../config/links';
import { ArrowUpRight, Shield, Zap, BadgePercent, CheckCircle } from 'lucide-react';

export const BrokerSection: React.FC = () => {
  return (
    <section id="broker" className="py-20 bg-[#0A0D15] border-y border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="rounded-3xl bg-gradient-to-br from-[#121622] via-[#0E121B] to-[#0A0D14] border border-[#D4AF37]/25 p-8 md:p-14 relative overflow-hidden shadow-2xl">
          
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#D4AF37]/10 text-[#E5C07B] text-xs font-semibold uppercase tracking-wider">
                Official Recommended Broker
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Trade with <span className="text-[#D4AF37]">MHMarkets</span> for Lowest Spreads & Maximum Execution Speed.
              </h2>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Our signals rely on precise entries and minimal slippage. We officially partner with MHMarkets to ensure our traders get institutional liquidity, tight raw spreads on Gold, and swift deposits/withdrawals.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs font-medium text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>Ultra-tight XAU/USD Spreads</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>Sub-millisecond execution</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>Zero deposit fees</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>Regulated broker protection</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={LINKS.brokerSignup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#E5C07B] to-[#B38914] text-[#0B0D14] font-bold text-sm rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#D4AF37]/20"
                >
                  Create MHMarkets Trading Account
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Benefit Box */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm space-y-3">
                <h3 className="text-white font-bold text-base flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#D4AF37]" /> Partner Code Benefit
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Sign up through our partner code (<span className="font-mono text-[#E5C07B] font-bold">1829HVVD</span>) to qualify for VIP access discount perks and direct priority trade guidance.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm space-y-3">
                <h3 className="text-white font-bold text-base flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#D4AF37]" /> Zero Inconvenience
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Fast 3-minute account registration. Fund via Crypto, Bank Transfer, or Cards to start copying signals immediately.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};