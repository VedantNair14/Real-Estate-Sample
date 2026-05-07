"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Magnetic from "../shared/Magnetic";

const articles = [
  {
    category: "Architecture",
    title: "The Rise of Biophilic Brutalism in Singapore",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    date: "May 2024"
  },
  {
    category: "Investment",
    title: "Decentralized Luxury: The Tokenization of Swiss Real Estate",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1973&auto=format&fit=crop",
    date: "April 2024"
  },
  {
    category: "Lifestyle",
    title: "Inside the Private Islands of the North Atlantic",
    image: "https://images.unsplash.com/photo-1505833359648-475491f53704?q=80&w=2070&auto=format&fit=crop",
    date: "March 2024"
  }
];

const LuxuryEditorial = () => {
  return (
    <section className="py-32 bg-luxury-black">
      <div className="container px-6 mx-auto">
        <div className="flex justify-between items-end mb-24">
          <div className="max-w-2xl">
            <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">The Editorial</span>
            <h2 className="editorial-heading text-5xl md:text-7xl text-white">
              Curated <span className="italic text-gold">Perspectives</span>
            </h2>
          </div>
          <Magnetic>
            <Link href="/editorial" className="group flex items-center gap-4 text-white/40 hover:text-white transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest">Read All Volumes</span>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold group-hover:bg-gold group-hover:text-black transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </Link>
          </Magnetic>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute top-8 left-8">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white">
                    {article.category}
                  </span>
                </div>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-4">{article.date}</p>
              <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-gold transition-colors duration-500">
                {article.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryEditorial;
