import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I receive the trading signals?",
    answer: "Signals are sent in real time via our private Telegram channel. You'll receive clear alerts specifying the pair (e.g. XAU/USD), Buy/Sell action, precise Entry price, Stop-Loss (SL), and multiple Take-Profit (TP) levels."
  },
  {
    question: "Do I need prior trading experience?",
    answer: "Not necessarily. Our signals are clear enough for complete beginners to copy and paste directly into MetaTrader 4 (MT4) or MetaTrader 5 (MT5). We also share risk management rules to protect your capital."
  },
  {
    question: "What broker can I use?",
    answer: "You can execute our signals on any broker. However, we strongly suggest our partner broker MHMarkets due to their raw spreads on Gold (XAU/USD), minimal slippage, and immediate execution."
  },
  {
    question: "Is the 7-day trial truly free?",
    answer: "Yes, 100% free. You do not need to submit any credit card details. Join our Telegram trial channel and start viewing live setups immediately."
  },
  {
    question: "What is your typical risk-to-reward ratio?",
    answer: "All setups target a minimum 1:2 up to 1:5 Risk-to-Reward ratio. We prioritize capital preservation and strict stop losses on every trade."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#0A0C13]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center space-y-3 mb-12">
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider">Got Questions?</span>
          <h2 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden transition-colors hover:border-white/[0.12]"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 text-sm font-semibold text-white"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-4 h-4 text-[#D4AF37] transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-5 text-xs text-zinc-400 leading-relaxed border-t border-white/[0.04] pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};