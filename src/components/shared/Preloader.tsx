"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-luxury-black"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <span className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-white mb-4">
                Estate<span className="text-gold">.</span>
              </span>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-white/10" />
                <span className="text-[10px] font-bold text-gold uppercase tracking-[0.5em]">
                  Redefining Luxury
                </span>
                <div className="w-12 h-[1px] bg-white/10" />
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-20 left-20">
            <div className="flex flex-col">
              <span className="text-8xl font-heading text-white/5 font-bold tabular-nums">
                {Math.round(progress)}%
              </span>
              <div className="w-64 h-[1px] bg-white/5 relative overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: `${progress - 100}%` }}
                  className="absolute inset-0 bg-gold"
                />
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-20 right-20 flex flex-col items-end">
            <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] mb-2">
              Global Presence
            </span>
            <div className="flex gap-4">
              {["NYC", "DXB", "LDN", "PAR"].map((city) => (
                <span key={city} className="text-[10px] font-bold text-white/10 uppercase tracking-widest">{city}</span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
