"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <span className={`text-2xl font-bold tracking-tighter uppercase ${isScrolled ? "text-luxury-black" : "text-white"}`}>
            Estate<span className="text-gold">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {["Buy", "Rent", "Sell", "Agents"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold ${
                isScrolled ? "text-luxury-black" : "text-white"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <button className={`p-2 rounded-full transition-colors ${isScrolled ? "text-luxury-black hover:bg-black/5" : "text-white hover:bg-white/10"}`}>
            <Search className="w-5 h-5" />
          </button>
          <button className={`p-2 rounded-full transition-colors ${isScrolled ? "text-luxury-black hover:bg-black/5" : "text-white hover:bg-white/10"}`}>
            <Heart className="w-5 h-5" />
          </button>
          <Button
            variant={isScrolled ? "default" : "outline"}
            className={!isScrolled ? "text-white border-white hover:bg-white hover:text-luxury-black" : ""}
          >
            Sign In
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-luxury-black" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-luxury-black" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col space-y-4"
          >
            {["Buy", "Rent", "Sell", "Agents"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-lg font-medium text-luxury-black hover:text-gold border-b border-gray-100 pb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-4">
              <Button className="flex-1">Sign In</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
