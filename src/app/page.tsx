"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedListings from "@/components/sections/FeaturedListings";
import MarketIntelligence from "@/components/sections/MarketIntelligence";
import LuxuryEditorial from "@/components/sections/LuxuryEditorial";
import { motion } from "framer-motion";
import { ArrowRight, Star, Quote, Building2, Users, Globe, Award, Play, ChevronRight, MapPin, Phone, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Magnetic from "@/components/shared/Magnetic";
import ConciergeInquiry from "@/components/shared/ConciergeInquiry";

/* ─────────────── STATS MARQUEE ─────────────── */
const StatsMarquee = () => (
  <section className="py-12 bg-luxury-dark border-y border-white/5 overflow-hidden">
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      className="flex gap-24 whitespace-nowrap"
    >
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex gap-24 items-center min-w-max">
          {[
            { num: "2.5k+", label: "Properties Curated" },
            { num: "$12B+", label: "Portfolio Value" },
            { num: "99%", label: "Client Retention" },
            { num: "45+", label: "Elite Markets" },
            { num: "180+", label: "Global Partners" },
            { num: "25yr", label: "Heritage" },
          ].map((stat, j) => (
            <div key={j} className="flex items-center gap-6">
              <span className="text-3xl font-bold text-white tracking-tighter">{stat.num}</span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">{stat.label}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-gold/30 mx-4" />
            </div>
          ))}
        </div>
      ))}
    </motion.div>
  </section>
);

/* ─────────────── EDITORIAL SHOWCASE ─────────────── */
const EditorialShowcase = () => (
  <section className="py-32 bg-luxury-black relative overflow-hidden">
    <div className="container px-6 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: Asymmetrical Image Grid */}
        <div className="lg:col-span-7 grid grid-cols-12 gap-6 relative">
           <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-8 aspect-[4/5] rounded-[3rem] overflow-hidden relative z-10"
          >
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200"
              alt="Luxury Architecture"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-[2s] hover:scale-105"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-6 absolute -bottom-12 -right-6 aspect-square w-[70%] rounded-[3rem] overflow-hidden border-8 border-luxury-black z-20 hidden md:block"
          >
            <Image
              src="https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&w=800"
              alt="Luxury Interior"
              fill
              sizes="30vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Right: Content */}
        <div className="lg:col-span-5 lg:pl-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-[1px] bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px]">
                The Editorial Philosophy
              </span>
            </div>
            <h2 className="editorial-heading text-5xl md:text-7xl text-white mb-8">
              Where <span className="italic text-gold">Architecture</span> <br /> 
              Meets Artistry
            </h2>
            <p className="text-white/40 text-lg font-light leading-relaxed mb-12">
              We don&apos;t just sell properties; we curate legacies. Every estate in our collection is handpicked for its architectural merit and cultural significance.
            </p>

            <div className="grid grid-cols-1 gap-6 mb-12">
              {[
                { icon: Award, label: "Heritage Preservation", desc: "Protecting architectural history." },
                { icon: Globe, label: "Global Reach", desc: "Exclusive access to private off-market listings." },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-4 p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:border-gold/20 transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{label}</h4>
                    <p className="text-white/30 text-xs font-light">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Magnetic>
              <Button className="bg-gold hover:bg-white text-black h-16 px-10 rounded-full transition-all duration-500 font-bold group">
                Discover Our Heritage
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────── LUXURY DESTINATIONS ─────────────── */
const LuxuryDestinations = () => {
  const destinations = [
    { city: "Monaco", country: "French Riviera", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800", price: "Avg $25M" },
    { city: "Dubai", country: "UAE", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800", price: "Avg $18M" },
    { city: "Hamptons", country: "New York", image: "https://images.unsplash.com/photo-1600607687940-c52fb0729a5c?auto=format&fit=crop&w=800", price: "Avg $15M" },
    { city: "Malibu", country: "California", image: "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&w=800", price: "Avg $22M" },
  ];

  return (
    <section className="py-32 bg-luxury-dark relative overflow-hidden">
       <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Global Footprint</span>
            <h2 className="editorial-heading text-5xl md:text-7xl text-white">
              Prime <span className="italic text-gold">Destinations</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="group relative h-[550px] rounded-[3rem] overflow-hidden cursor-pointer"
            >
              <Image
                src={dest.image}
                alt={dest.city}
                fill
                unoptimized
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-2 block">{dest.country}</span>
                <h3 className="text-4xl font-bold text-white mb-4 tracking-tighter">{dest.city}</h3>
                <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-white/60 text-xs font-medium">{dest.price}</span>
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────── TESTIMONIALS ─────────────── */
const Testimonials = () => {
  const reviews = [
    { name: "Julian Ashford", title: "CEO, Global Equities", text: "Estate redefined my expectations of what a real estate partner should be. Their curation is flawless.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" },
    { name: "Victoria Chen", title: "Creative Director", text: "They didn&apos;t just show me properties; they showed me a lifestyle that matched my soul.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" },
  ];

  return (
    <section className="py-32 bg-luxury-black relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <Quote className="w-16 h-16 text-gold/10 mx-auto mb-8" />
          <h2 className="editorial-heading text-5xl md:text-7xl text-white">
            Trusted by the world&apos;s <br /> <span className="italic text-gold">most discerning</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-12 rounded-[3rem] border border-white/5 relative group hover:border-gold/20 transition-all duration-700"
            >
              <div className="flex gap-1 mb-8 text-gold">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <p className="text-white/60 text-xl font-light italic leading-relaxed mb-10">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image src={review.avatar} alt={review.name} fill className="object-cover" unoptimized />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{review.name}</h4>
                  <p className="text-[10px] text-gold uppercase tracking-[0.3em] font-bold">{review.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────── CTA SECTION ─────────────── */
const CTASection = ({ onConsultation }: { onConsultation: () => void }) => (
  <section className="py-32 bg-luxury-black relative overflow-hidden">
    <div className="container px-6 mx-auto">
      <div className="relative rounded-[4rem] overflow-hidden aspect-[21/9] flex items-center justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dcea4db0d?q=80&w=2187&auto=format&fit=crop"
          alt="Luxury Interior"
          fill
          unoptimized
          className="object-cover brightness-50"
        />
        <div className="relative z-10 max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="editorial-heading text-6xl md:text-8xl text-white mb-10">
              Your <span className="italic text-gold">Legacy</span> Awaits
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Magnetic>
                <Button 
                  onClick={onConsultation}
                  className="bg-gold hover:bg-white text-black h-16 px-12 rounded-full font-bold text-lg transition-all duration-500"
                >
                  Private Consultation
                </Button>
              </Magnetic>
              <Magnetic>
                <Link href="/search">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 h-16 px-12 rounded-full font-bold text-lg transition-all duration-500">
                    Browse Portfolios
                  </Button>
                </Link>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────── FOOTER ─────────────── */
const Footer = () => (
  <footer className="bg-luxury-black pt-32 pb-16 border-t border-white/5">
    <div className="container px-6 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
        <div className="lg:col-span-4">
          <span className="text-3xl font-bold tracking-tighter uppercase mb-8 block text-white">
            Estate<span className="text-gold">.</span>
          </span>
          <p className="text-white/40 max-w-sm leading-relaxed mb-10 text-lg font-light">
            Redefining ultra-luxury real estate through editorial excellence and unparalleled global intelligence.
          </p>
          <div className="flex gap-6">
            {["Instagram", "LinkedIn", "X"].map((social) => (
              <a key={social} href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 hover:text-gold transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-bold mb-8 text-[10px] uppercase tracking-[0.4em] text-gold">Curation</h4>
            <ul className="space-y-4 text-white/40 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">The 100 Collection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Private Islands</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Urban Penthouses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Historic Estates</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-[10px] uppercase tracking-[0.4em] text-gold">Intelligence</h4>
            <ul className="space-y-4 text-white/40 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Market Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investment Advisory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Private Wealth</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-[10px] uppercase tracking-[0.4em] text-gold">Concierge</h4>
            <ul className="space-y-4 text-white/40 text-sm font-medium">
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-gold/50" /> +1 (310) 555-0199</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-gold/50" /> elite@estate.com</li>
              <li className="flex items-center gap-3"><Globe className="w-4 h-4 text-gold/50" /> Beverly Hills, CA</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-between pt-16 border-t border-white/5 gap-8">
        <p className="text-white/20 text-[10px] tracking-[0.4em] uppercase font-bold">
          © 2024 Estate International Realty. Excellence in Perpetuity.
        </p>
        <div className="flex gap-10">
          {["Privacy", "Terms", "Legal"].map((link) => (
            <a key={link} href="#" className="text-[10px] uppercase tracking-[0.4em] text-white/20 hover:text-gold transition-colors font-bold">
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

/* ─────────────── HOME PAGE ─────────────── */
export default function Home() {
  const [isInquiryOpen, setIsInquiryOpen] = React.useState(false);

  return (
    <main className="bg-luxury-black">
      <Navbar />
      <Hero />
      <StatsMarquee />
      <MarketIntelligence />
      <FeaturedListings />
      <EditorialShowcase />
      <LuxuryDestinations />
      <Testimonials />
      <LuxuryEditorial />
      <CTASection onConsultation={() => setIsInquiryOpen(true)} />
      <Footer />
      <ConciergeInquiry isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </main>
  );
}

