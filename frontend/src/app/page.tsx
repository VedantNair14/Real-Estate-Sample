"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedListings from "@/components/sections/FeaturedListings";
import { motion } from "framer-motion";
import { ArrowRight, Star, Quote, Building2, Users, Globe, Award, Play, ChevronRight, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

/* ─────────────── STATS MARQUEE ─────────────── */
const StatsMarquee = () => (
  <section className="py-6 bg-luxury-black overflow-hidden">
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 25, ease: "linear", repeat: Infinity }}
      className="flex gap-16 whitespace-nowrap"
    >
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex gap-16 items-center min-w-max">
          {[
            { num: "2,500+", label: "Properties Sold" },
            { num: "$12B+", label: "Transaction Volume" },
            { num: "98%", label: "Client Satisfaction" },
            { num: "35+", label: "Global Markets" },
            { num: "150+", label: "Elite Advisors" },
            { num: "15yr", label: "Industry Excellence" },
          ].map((stat, j) => (
            <div key={j} className="flex items-center gap-4">
              <span className="text-2xl font-bold text-gold tracking-tight">{stat.num}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-medium">{stat.label}</span>
              <span className="text-white/10 mx-2">◆</span>
            </div>
          ))}
        </div>
      ))}
    </motion.div>
  </section>
);

/* ─────────────── EDITORIAL SHOWCASE ─────────────── */
const EditorialShowcase = () => (
  <section className="py-28 bg-[#faf9f6] relative overflow-hidden">
    <div className="container px-6 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[700px]">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden group"
        >
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
            alt="Luxury Architecture"
            fill
            className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="glass rounded-2xl p-6 backdrop-blur-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                </div>
                <div>
                  <p className="text-white font-bold">Take a Virtual Tour</p>
                  <p className="text-white/60 text-sm">Experience luxury from anywhere</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center lg:pl-20 py-16 lg:py-0"
        >
          <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-6 block">
            Editorial Living
          </span>
          <h2 className="editorial-heading text-4xl md:text-6xl text-luxury-black mb-8 leading-tight">
            Where <span className="italic">Architecture</span>
            <br />Meets Artistry
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
            Every estate in our collection is handpicked for its architectural merit, cultural significance, and investment potential. We don&apos;t just sell properties — we curate legacies.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-12">
            {[
              { icon: Building2, label: "Architectural Masterpieces" },
              { icon: Globe, label: "Global Portfolio" },
              { icon: Award, label: "Award-Winning Team" },
              { icon: Users, label: "White-Glove Service" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <span className="text-sm font-semibold text-luxury-black">{label}</span>
              </div>
            ))}
          </div>

          <Button className="bg-luxury-black hover:bg-gold text-white h-14 px-10 rounded-full w-fit transition-all duration-300 group">
            Explore Our Story
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─────────────── LUXURY DESTINATIONS ─────────────── */
const LuxuryDestinations = () => {
  const destinations = [
    { city: "Malibu", country: "California", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop", listings: "42" },
    { city: "Beverly Hills", country: "California", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop", listings: "38" },
    { city: "Manhattan", country: "New York", image: "https://images.unsplash.com/photo-1600607687940-c52fb0729a5c?q=80&w=2070&auto=format&fit=crop", listings: "67" },
    { city: "Miami Beach", country: "Florida", image: "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?q=80&w=2187&auto=format&fit=crop", listings: "29" },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
              Premium Locations
            </span>
            <h2 className="editorial-heading text-4xl md:text-6xl text-luxury-black">
              Luxury <span className="italic">Destinations</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <Image
                src={dest.image}
                alt={dest.city}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  <span className="text-xs uppercase tracking-[0.2em] text-white/60 font-medium">{dest.country}</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 editorial-heading">{dest.city}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">{dest.listings} Exclusive Listings</span>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
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
    { name: "Julian Ashford", title: "CEO, Ashford Capital", text: "The experience of finding our home with Estate was nothing short of extraordinary. Their attention to detail and curated selection made the process seamless and elevated.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" },
    { name: "Victoria Chen", title: "Founder, Lumière Design", text: "Estate understood exactly what we were looking for. They didn't just show us properties — they showed us a lifestyle. Our new penthouse exceeded every expectation.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" },
    { name: "Marcus Sterling", title: "Managing Partner, Sterling & Co.", text: "Working with Estate felt like having a private concierge for real estate. Their global network and market insight are genuinely world-class.", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" },
  ];

  return (
    <section className="py-28 bg-[#faf9f6] relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Quote className="w-12 h-12 text-gold/20 mx-auto mb-6" />
          <h2 className="editorial-heading text-4xl md:text-5xl text-luxury-black mb-6">
            Trusted by the world&apos;s most <br /> <span className="italic">discerning buyers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-6 text-gold">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-8 italic leading-relaxed text-[15px]">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-luxury-black">{review.name}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">{review.title}</p>
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
const CTASection = () => (
  <section className="py-0 overflow-hidden relative">
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
      {/* Left: Image */}
      <div className="relative h-[400px] lg:h-auto">
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dcea4db0d?q=80&w=2187&auto=format&fit=crop"
          alt="Luxury Interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Right: Content */}
      <div className="bg-luxury-black flex items-center justify-center p-16 lg:p-24">
        <div className="max-w-lg">
          <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-6 block">
            Start Your Journey
          </span>
          <h2 className="editorial-heading text-4xl md:text-6xl text-white mb-8 leading-tight">
            Ready to find your <br /> <span className="italic text-gold">next masterpiece?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Our private advisors are ready to assist you in discovering the most exclusive properties worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-gold hover:bg-white hover:text-luxury-black text-white h-14 px-10 rounded-full transition-all duration-300 text-base">
              Contact an Agent
            </Button>
            <Link href="/search">
              <Button variant="outline" className="border-white/20 text-white h-14 px-10 rounded-full hover:bg-white/10 transition-all duration-300 text-base w-full">
                Browse Listings
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────── FOOTER ─────────────── */
const Footer = () => (
  <footer className="bg-luxury-black pt-24 pb-12 text-white">
    <div className="container px-6 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
        <div className="lg:col-span-2">
          <span className="text-2xl font-bold tracking-tighter uppercase mb-6 block">
            Estate<span className="text-gold">.</span>
          </span>
          <p className="text-gray-400 max-w-xs leading-relaxed mb-8">
            Redefining luxury real estate through editorial design, technological excellence, and unparalleled service.
          </p>
          <div className="flex gap-4">
            {["Instagram", "LinkedIn", "Twitter"].map((social) => (
              <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-gold hover:border-gold hover:text-white transition-all duration-300">
                <span className="text-xs font-bold">{social[0]}</span>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Discovery</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-gold transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Exclusive Listings</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Luxury Mansions</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Virtual Tours</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Company</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-gold transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Private Advisors</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Journal</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Contact</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /> +1 (310) 555-0199</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold" /> concierge@estate.com</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold" /> Beverly Hills, CA</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/10 gap-6">
        <p className="text-gray-500 text-xs tracking-widest uppercase">
          © 2024 Estate International Realty. All rights reserved.
        </p>
        <div className="flex gap-8">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
            <a key={link} href="#" className="text-xs uppercase tracking-widest text-gray-500 hover:text-gold transition-colors">
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
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsMarquee />
      <FeaturedListings />
      <EditorialShowcase />
      <LuxuryDestinations />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
