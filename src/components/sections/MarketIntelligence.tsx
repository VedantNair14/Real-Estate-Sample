"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Globe2, Activity } from "lucide-react";

const stats = [
  { label: "Market Appreciation", val: "+12.4%", trend: "Year-over-Year", icon: TrendingUp },
  { label: "Global Demand Index", val: "9.8/10", trend: "High Liquidity", icon: Globe2 },
  { label: "Prime Yield Avg", val: "6.2%", trend: "Stable Capital", icon: BarChart3 },
  { label: "Portfolio Velocity", val: "14 Days", trend: "Average Exit", icon: Activity },
];

const MarketIntelligence = () => {
  return (
    <section className="py-32 bg-luxury-dark relative overflow-hidden">
      {/* Blueprint Grid Texture Overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-2xl">
            <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Market Intelligence</span>
            <h2 className="editorial-heading text-5xl md:text-7xl text-white leading-none">
              Strategic <span className="italic text-gold">Insights</span> & Global Trends
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-lg font-light leading-relaxed">
            Real-time data visualization of the world's most exclusive real estate markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all duration-700"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-10 group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
                <stat.icon className="w-6 h-6 text-gold group-hover:text-black transition-colors" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-2">{stat.label}</p>
              <h4 className="text-4xl font-bold text-white mb-2 tracking-tighter">{stat.val}</h4>
              <p className="text-[10px] font-medium text-gold/50 uppercase tracking-widest">{stat.trend}</p>
            </motion.div>
          ))}
        </div>

        {/* Decorative Data Visualization Mockup */}
        <div className="mt-24 relative rounded-[4rem] border border-white/5 bg-white/[0.01] p-12 overflow-hidden aspect-[21/9] hidden md:block">
          <div className="absolute inset-0 flex items-end px-12 pb-20 gap-4">
            {[40, 70, 45, 90, 65, 85, 50, 100, 75, 95].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 bg-gradient-to-t from-gold/5 via-gold/20 to-gold/40 rounded-t-xl"
              />
            ))}
          </div>
          <div className="relative z-10">
            <h5 className="text-white font-bold text-xl mb-2">Prime Asset Trajectory</h5>
            <p className="text-white/20 text-xs uppercase tracking-widest">Global Aggregate Performance 2024-2026</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketIntelligence;
