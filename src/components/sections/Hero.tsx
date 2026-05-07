"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Home, DollarSign, ArrowDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Magnetic from "@/components/shared/Magnetic";

const heroImages = [
  "https://images.unsplash.com/photo-1600585154340-be6199f7e009?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const router = useRouter();
  
  const [searchParams, setSearchParams] = useState({
    location: "",
    type: "Penthouse",
    price: "$1M - $5M"
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    const query = new URLSearchParams(searchParams).toString();
    router.push(`/search?${query}`);
  };

  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[currentImage]}
            alt="Luxury Estate"
            fill
            className="object-cover brightness-[0.6]"
            priority
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      <div className="absolute inset-0 mesh-gradient opacity-40" />

      {/* Content Container */}
      <div className="container relative z-20 px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full glass border-white/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">
              The Global Collection 2024
            </span>
          </motion.div>

          {/* Heading */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="editorial-heading text-6xl md:text-8xl lg:text-[7.5rem] text-white leading-[0.9] flex flex-col items-center"
            >
              <span>Exquisite</span>
              <span className="italic text-gold">Masterpieces</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white/50 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-16"
          >
            Curating the world&apos;s most prestigious estates for those who settle for nothing less than extraordinary.
          </motion.p>

          {/* Luxury Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass p-2 rounded-[2rem] flex flex-col md:flex-row items-stretch gap-2">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                {/* Location */}
                <div className="px-6 py-4 flex flex-col items-start group">
                  <span className="text-[9px] uppercase font-bold text-gold tracking-widest mb-1">Destination</span>
                  <div className="flex items-center w-full">
                    <MapPin className="w-4 h-4 text-white/40 mr-2 group-hover:text-gold transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Monaco, Aspen..." 
                      className="bg-transparent border-none focus:ring-0 text-white font-medium placeholder:text-white/20 p-0 text-[15px] outline-none w-full"
                      value={searchParams.location}
                      onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
                    />
                  </div>
                </div>

                {/* Type */}
                <div className="px-6 py-4 flex flex-col items-start group">
                  <span className="text-[9px] uppercase font-bold text-gold tracking-widest mb-1">Estate Type</span>
                  <div className="flex items-center w-full relative">
                    <Home className="w-4 h-4 text-white/40 mr-2 group-hover:text-gold transition-colors" />
                    <select 
                      className="bg-transparent border-none focus:ring-0 text-white font-medium p-0 text-[15px] outline-none appearance-none w-full cursor-pointer"
                      value={searchParams.type}
                      onChange={(e) => setSearchParams({ ...searchParams, type: e.target.value })}
                    >
                      <option className="bg-luxury-black">Penthouse</option>
                      <option className="bg-luxury-black">Coastal Villa</option>
                      <option className="bg-luxury-black">Private Island</option>
                      <option className="bg-luxury-black">Historic Manor</option>
                    </select>
                  </div>
                </div>

                {/* Price */}
                <div className="px-6 py-4 flex flex-col items-start group">
                  <span className="text-[9px] uppercase font-bold text-gold tracking-widest mb-1">Investment</span>
                  <div className="flex items-center w-full relative">
                    <DollarSign className="w-4 h-4 text-white/40 mr-2 group-hover:text-gold transition-colors" />
                    <select 
                      className="bg-transparent border-none focus:ring-0 text-white font-medium p-0 text-[15px] outline-none appearance-none w-full cursor-pointer"
                      value={searchParams.price}
                      onChange={(e) => setSearchParams({ ...searchParams, price: e.target.value })}
                    >
                      <option className="bg-luxury-black">$5M - $10M</option>
                      <option className="bg-luxury-black">$10M - $50M</option>
                      <option className="bg-luxury-black">$50M+</option>
                    </select>
                  </div>
                </div>
              </div>

              <Magnetic>
                <Button 
                  onClick={handleSearch}
                  className="bg-gold hover:bg-white text-black h-full px-10 rounded-[1.5rem] transition-all duration-500 font-bold tracking-tight group flex items-center gap-2"
                >
                  Discover
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Image Indicators */}
      <div className="absolute right-12 bottom-12 z-30 hidden lg:flex flex-col gap-4">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className="group relative"
          >
            <div className={`w-1 transition-all duration-700 ${currentImage === i ? "h-12 bg-gold" : "h-6 bg-white/20 group-hover:bg-white/40"}`} />
            <span className={`absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold transition-all duration-500 ${currentImage === i ? "opacity-100 text-gold" : "opacity-0 text-white"}`}>
              0{i + 1}
            </span>
          </button>
        ))}
      </div>

      {/* Scroll Down */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gold to-transparent" />
        <span className="text-[8px] uppercase tracking-[0.4em] text-white/30 font-bold">Explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;

