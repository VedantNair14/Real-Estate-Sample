"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Home, DollarSign, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

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

  const handleSearch = () => {
    const query = new URLSearchParams({
      location: searchParams.location,
      type: searchParams.type,
      price: searchParams.price
    }).toString();
    router.push(`/search?${query}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Rotating Background Images */}
      {heroImages.map((src, i) => (
        <motion.div
          key={i}
          animate={{ opacity: currentImage === i ? 1 : 0, scale: currentImage === i ? 1 : 1.1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={src}
            alt={`Hero ${i + 1}`}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Side Indicators */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`w-[3px] rounded-full transition-all duration-500 ${
              currentImage === i ? "h-10 bg-gold" : "h-4 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-5 py-2 mb-8 text-[10px] font-bold tracking-[0.3em] uppercase border border-white/20 bg-white/5 backdrop-blur-md rounded-full">
            The Pinnacle of Luxury Living
          </span>
          <h1 className="editorial-heading text-5xl md:text-7xl lg:text-[6.5rem] mb-6 leading-[0.95]">
            Find Your <br />
            <span className="italic text-gold">Dream Estate</span>
          </h1>
          <p className="text-white/60 text-lg max-w-lg mx-auto mb-12">
            Discover the world&apos;s most prestigious properties, curated for extraordinary living.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/95 backdrop-blur-md p-2 md:p-3 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-2">
            <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="flex items-center px-5 py-3 md:py-0">
                <MapPin className="w-5 h-5 text-gold mr-3 shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Location</p>
                  <input 
                    type="text" 
                    placeholder="Where to?" 
                    value={searchParams.location}
                    onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
                    className="w-full bg-transparent border-none focus:ring-0 text-luxury-black font-medium placeholder:text-gray-400 p-0 text-sm outline-none"
                  />
                </div>
              </div>
              
              <div className="flex items-center px-5 py-3 md:py-0">
                <Home className="w-5 h-5 text-gold mr-3 shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Property Type</p>
                  <select 
                    value={searchParams.type}
                    onChange={(e) => setSearchParams({ ...searchParams, type: e.target.value })}
                    className="w-full bg-transparent border-none focus:ring-0 text-luxury-black font-medium p-0 text-sm appearance-none outline-none"
                  >
                    <option>Penthouse</option>
                    <option>Villa</option>
                    <option>Mansion</option>
                    <option>Modern</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center px-5 py-3 md:py-0">
                <DollarSign className="w-5 h-5 text-gold mr-3 shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Price Range</p>
                  <select 
                    value={searchParams.price}
                    onChange={(e) => setSearchParams({ ...searchParams, price: e.target.value })}
                    className="w-full bg-transparent border-none focus:ring-0 text-luxury-black font-medium p-0 text-sm appearance-none outline-none"
                  >
                    <option>$1M - $5M</option>
                    <option>$5M - $10M</option>
                    <option>$10M+</option>
                  </select>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={handleSearch}
              className="w-full md:w-auto h-12 md:h-14 px-8 rounded-xl bg-luxury-black hover:bg-gold transition-all duration-300 group shrink-0"
            >
              <Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Search</span>
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/40">Scroll to Discover</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 text-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
