"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Upload, DollarSign, TrendingUp, Shield, CheckCircle2, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const SellPage = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", address: "", propertyType: "Villa", estimatedValue: "",
  });

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dcea4db0d?q=80&w=2187&auto=format&fit=crop"
          alt="Sell Property"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="container px-6 mx-auto relative z-10 pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="bg-gold text-white border-none mb-4">List With Us</Badge>
            <h1 className="editorial-heading text-5xl md:text-7xl text-white mb-4">
              Sell Your <span className="italic">Property</span>
            </h1>
            <p className="text-white/60 text-lg max-w-lg">
              Partner with the world&apos;s most trusted luxury real estate advisors to maximize your property&apos;s value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Sell With Us */}
      <section className="py-20 bg-[#faf9f6]">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Our Advantage</span>
            <h2 className="editorial-heading text-4xl md:text-5xl text-luxury-black">
              Why Sell With <span className="italic">Estate</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, title: "Maximum Value", desc: "Our market analysis ensures you get top dollar for your property." },
              { icon: Shield, title: "Verified Buyers", desc: "We pre-qualify every buyer for a seamless, secure transaction." },
              { icon: DollarSign, title: "Zero Hidden Fees", desc: "Transparent pricing with no surprises at closing." },
              { icon: Upload, title: "Global Exposure", desc: "Your listing reaches 50,000+ verified luxury buyers worldwide." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h4 className="text-lg font-bold text-luxury-black mb-3">{title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Simple Process</span>
            <h2 className="editorial-heading text-4xl md:text-5xl text-luxury-black">
              Three Steps to <span className="italic">Sold</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Submit Your Property", desc: "Fill out our inquiry form with your property details. Our team will review and respond within 24 hours." },
              { step: "02", title: "Professional Valuation", desc: "Our certified appraisers conduct an in-depth market analysis to determine optimal pricing." },
              { step: "03", title: "Close the Deal", desc: "We handle marketing, showings, negotiations, and paperwork. You simply sign and celebrate." },
            ].map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <span className="text-8xl font-bold text-gray-100 absolute -top-6 left-0 editorial-heading">{step}</span>
                <div className="relative z-10 pt-12">
                  <h4 className="text-xl font-bold text-luxury-black mb-4">{title}</h4>
                  <p className="text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-luxury-black">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Get Started</span>
              <h2 className="editorial-heading text-4xl md:text-5xl text-white mb-8">
                Ready to list <br />your <span className="italic text-gold">property?</span>
              </h2>
              <p className="text-gray-400 mb-10 leading-relaxed max-w-md">
                Complete the form and a dedicated advisor will contact you within 24 hours for a complimentary property assessment.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Phone, text: "+1 (310) 555-0199" },
                  { icon: Mail, text: "listings@estate.com" },
                  { icon: MapPin, text: "9876 Wilshire Blvd, Beverly Hills, CA" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-gray-400">
                    <Icon className="w-4 h-4 text-gold" />
                    <span className="text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10"
            >
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Full Name" className="h-12 rounded-xl bg-white/10 border-white/10 text-white placeholder:text-gray-500" />
                  <Input placeholder="Email" className="h-12 rounded-xl bg-white/10 border-white/10 text-white placeholder:text-gray-500" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Phone" className="h-12 rounded-xl bg-white/10 border-white/10 text-white placeholder:text-gray-500" />
                  <select className="h-12 rounded-xl bg-white/10 border border-white/10 text-white px-4 text-sm w-full outline-none">
                    <option className="text-black">Villa</option>
                    <option className="text-black">Penthouse</option>
                    <option className="text-black">Mansion</option>
                    <option className="text-black">Apartment</option>
                  </select>
                </div>
                <Input placeholder="Property Address" className="h-12 rounded-xl bg-white/10 border-white/10 text-white placeholder:text-gray-500" />
                <Input placeholder="Estimated Value ($)" className="h-12 rounded-xl bg-white/10 border-white/10 text-white placeholder:text-gray-500" />
                <textarea
                  placeholder="Tell us more about your property..."
                  rows={4}
                  className="w-full rounded-xl bg-white/10 border border-white/10 text-white px-4 py-3 text-sm placeholder:text-gray-500 outline-none resize-none"
                />
                <Button className="w-full h-14 bg-gold hover:bg-white hover:text-luxury-black text-white rounded-xl font-bold text-base transition-all duration-300">
                  Submit Inquiry
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellPage;
