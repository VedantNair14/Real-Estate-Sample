"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, Heart, Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Magnetic from "../shared/Magnetic";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  const navLinks = [
    { name: "Portfolio", href: "/buy" },
    { name: "Rentals", href: "/rent" },
    { name: "Services", href: "/sell" },
    { name: "Advisors", href: "/agents" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`relative flex items-center justify-between glass px-8 py-4 rounded-full border-white/5 transition-all duration-700 ${isScrolled ? "bg-black/60 backdrop-blur-xl" : "bg-white/5 backdrop-blur-md"}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.span 
              className="text-2xl font-bold tracking-tighter uppercase text-white"
              whileHover={{ scale: 1.05 }}
            >
              Estate<span className="text-gold">.</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Magnetic key={link.name}>
                <Link
                  href={link.href}
                  className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/70 hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </Magnetic>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Magnetic>
              <Link href="/search" className="p-2 text-white/70 hover:text-gold transition-colors">
                <Search className="w-5 h-5" />
              </Link>
            </Magnetic>
            
            <div className="w-[1px] h-4 bg-white/10 mx-2" />
            
            {isLoggedIn ? (
              <Magnetic>
                <Link href="/dashboard">
                  <div className="flex items-center gap-3 pl-1 pr-4 py-1 rounded-full bg-white/5 border border-white/10 hover:border-gold/50 transition-all">
                    <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-black font-bold text-xs">JS</div>
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Julian</span>
                  </div>
                </Link>
              </Magnetic>
            ) : (
              <Magnetic>
                <Button
                  variant="ghost"
                  onClick={handleSignIn}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-gold hover:bg-transparent"
                >
                  Client Access
                </Button>
              </Magnetic>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Cinematic Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-luxury-black flex flex-col md:hidden"
          >
            <div className="flex justify-between items-center p-8">
               <span className="text-2xl font-bold tracking-tighter uppercase text-white">
                Estate<span className="text-gold">.</span>
              </span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white">
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center px-12 space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link
                    href={link.href}
                    className="text-5xl font-heading text-white hover:text-gold transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-12 border-t border-white/5">
              <Button className="w-full bg-gold text-black font-bold h-16 rounded-2xl" onClick={handleSignIn}>
                Private Portal
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

