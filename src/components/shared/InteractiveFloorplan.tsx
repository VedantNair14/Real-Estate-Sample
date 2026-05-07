"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Compass, Layers, Ruler } from "lucide-react";

const InteractiveFloorplan = () => {
  const [activeLevel, setActiveLevel] = useState(1);

  return (
    <div className="w-full glass rounded-[3.5rem] border-white/5 overflow-hidden flex flex-col md:flex-row min-h-[600px]">
      {/* Controls */}
      <div className="md:w-24 bg-white/5 border-r border-white/5 p-6 flex flex-col items-center justify-between">
        <div className="space-y-6">
          <button className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all">
            <Maximize2 className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all">
            <Compass className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex flex-col gap-4">
          {[3, 2, 1].map((level) => (
            <button
              key={level}
              onClick={() => setActiveLevel(level)}
              className={`w-12 h-12 rounded-full border transition-all flex items-center justify-center font-bold text-xs ${
                activeLevel === level 
                  ? "bg-gold border-gold text-black" 
                  : "border-white/10 text-white/30 hover:border-white/30"
              }`}
            >
              L{level}
            </button>
          ))}
        </div>
      </div>

      {/* Viewport */}
      <div className="flex-1 p-12 relative flex items-center justify-center bg-black/40">
        <div className="absolute top-12 left-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-2 block">Architectural Blueprint</span>
          <h4 className="text-2xl font-bold text-white">Level 0{activeLevel}</h4>
        </div>

        {/* Mock Floorplan Visualization */}
        <motion.div
          key={activeLevel}
          initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl aspect-square border border-white/10 rounded-xl flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          {/* Blueprint Lines */}
          <div className="absolute inset-0 blueprint-grid opacity-10" />
          
          {/* Mock Vector Rooms */}
          <svg viewBox="0 0 400 400" className="w-full h-full p-12 text-gold/40">
            <motion.path
              d="M50 50 L350 50 L350 350 L50 350 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
            <motion.rect x="70" y="70" width="120" height="120" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1" />
            <motion.rect x="210" y="70" width="120" height="150" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1" />
            <motion.rect x="70" y="210" width="260" height="120" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1" />
            
            {/* Room Labels */}
            <text x="80" y="90" fontSize="10" className="fill-white/40 font-bold uppercase tracking-widest">Master Suite</text>
            <text x="220" y="90" fontSize="10" className="fill-white/40 font-bold uppercase tracking-widest">Grand Salon</text>
            <text x="80" y="230" fontSize="10" className="fill-white/40 font-bold uppercase tracking-widest">Sky Gallery</text>
          </svg>

          {/* Interactive Pointers */}
          <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-gold rounded-full shadow-[0_0_20px_rgba(197,163,88,0.5)] animate-pulse" />
        </motion.div>

        {/* Footer Info */}
        <div className="absolute bottom-12 right-12 flex gap-8">
          <div className="flex items-center gap-3">
            <Ruler className="w-4 h-4 text-gold" />
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">12,400 Total SQFT</span>
          </div>
          <div className="flex items-center gap-3">
            <Layers className="w-4 h-4 text-gold" />
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">3 Levels</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFloorplan;
