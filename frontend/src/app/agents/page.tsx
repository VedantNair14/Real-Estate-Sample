"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Star, Phone, Mail, MapPin, ArrowRight, Award, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const agents = [
  {
    name: "Elena Sterling",
    title: "Senior Luxury Advisor",
    specialty: "Malibu & Beverly Hills",
    sales: "$450M+",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    bio: "With 15+ years in luxury real estate, Elena specializes in ultra-high-end coastal properties and has closed over $450M in transactions.",
  },
  {
    name: "Marcus Chen",
    title: "Global Property Director",
    specialty: "Manhattan & Miami",
    sales: "$380M+",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    bio: "Marcus brings deep expertise in urban luxury markets, connecting discerning clients with iconic penthouses and condominiums.",
  },
  {
    name: "Victoria Laurent",
    title: "Private Client Advisor",
    specialty: "International Markets",
    sales: "$520M+",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    bio: "Victoria serves an exclusive international clientele, specializing in cross-border luxury transactions and investment properties.",
  },
  {
    name: "James Ashford",
    title: "Estate Specialist",
    specialty: "Austin & Dallas",
    sales: "$290M+",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    bio: "James has deep roots in the Texas luxury market, known for his attention to detail and unmatched client satisfaction.",
  },
  {
    name: "Sophia Rivera",
    title: "Architectural Consultant",
    specialty: "Modern & Contemporary",
    sales: "$340M+",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    bio: "With a background in architecture, Sophia offers unique insights into design-driven properties and renovation potential.",
  },
  {
    name: "Alexander Moore",
    title: "Investment Advisor",
    specialty: "Portfolio & Commercial",
    sales: "$610M+",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    bio: "Alexander specializes in high-yield real estate investments, helping clients build diversified luxury property portfolios.",
  },
];

const AgentsPage = () => (
  <div className="bg-white min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600607687940-c52fb0729a5c?q=80&w=2070&auto=format&fit=crop"
        alt="Our Agents"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="container px-6 mx-auto relative z-10 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Badge className="bg-gold text-white border-none mb-4">Our Team</Badge>
          <h1 className="editorial-heading text-5xl md:text-7xl text-white mb-4">
            Meet Our <span className="italic">Advisors</span>
          </h1>
          <p className="text-white/60 text-lg max-w-lg">
            World-class professionals dedicated to delivering exceptional results in luxury real estate.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-10 bg-luxury-black">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "150+", label: "Elite Advisors" },
            { value: "$12B+", label: "Total Sales" },
            { value: "98%", label: "Client Retention" },
            { value: "35+", label: "Global Markets" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-bold text-gold mb-1">{value}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Agents Grid */}
    <section className="py-20">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Private Advisors</span>
          <h2 className="editorial-heading text-4xl md:text-5xl text-luxury-black">
            Handpicked <span className="italic">Experts</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500"
            >
              {/* Photo */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <Button size="sm" className="bg-white/90 text-luxury-black hover:bg-gold hover:text-white rounded-full h-9 px-4 gap-1.5 text-xs">
                    <Phone className="w-3 h-3" /> Call
                  </Button>
                  <Button size="sm" className="bg-white/90 text-luxury-black hover:bg-gold hover:text-white rounded-full h-9 px-4 gap-1.5 text-xs">
                    <Mail className="w-3 h-3" /> Email
                  </Button>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-luxury-black">{agent.name}</h3>
                    <p className="text-sm text-gold font-medium">{agent.title}</p>
                  </div>
                  <div className="flex items-center gap-1 text-gold">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-bold">{agent.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{agent.bio}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <MapPin className="w-3 h-3" />
                    {agent.specialty}
                  </div>
                  <Badge className="bg-green-50 text-green-600 border-none text-xs">{agent.sales} Sales</Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-[#faf9f6]">
      <div className="container px-6 mx-auto text-center max-w-2xl">
        <h2 className="editorial-heading text-4xl md:text-5xl text-luxury-black mb-6">
          Want to join our <span className="italic">team?</span>
        </h2>
        <p className="text-gray-400 mb-10 text-lg leading-relaxed">
          We&apos;re always looking for exceptional talent to join our world-class advisory team. If you have a passion for luxury real estate, we&apos;d love to hear from you.
        </p>
        <Button className="bg-luxury-black hover:bg-gold text-white h-14 px-10 rounded-full transition-all duration-300 group">
          Apply Now
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  </div>
);

export default AgentsPage;
