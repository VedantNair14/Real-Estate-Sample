"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropertyCard from "../shared/PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, Sparkles } from "lucide-react";
import axios from "axios";
import Link from "next/link";
import Magnetic from "../shared/Magnetic";

const MOCK_PROPERTIES = [
  {
    id: 1,
    title: "The Glass Pavilion",
    location: "Malibu, CA",
    price: 12500000,
    beds: 5,
    baths: 6,
    sqft: 8500,
    property_type: "Villa",
    main_image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200",
    status: "For Sale"
  },
  {
    id: 2,
    title: "Skyline Penthouse",
    location: "Manhattan, NY",
    price: 8900000,
    beds: 3,
    baths: 4,
    sqft: 4200,
    property_type: "Penthouse",
    main_image: "https://images.unsplash.com/photo-1600607687940-c52fb0729a5c?auto=format&fit=crop&w=1200",
    status: "For Sale"
  },
  {
    id: 3,
    title: "Azure Coastal Villa",
    location: "Miami, FL",
    price: 15700000,
    beds: 6,
    baths: 8,
    sqft: 11000,
    property_type: "Mansion",
    main_image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200",
    status: "Exclusive"
  }
];

const FeaturedListings = () => {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("http://localhost:8001/api/properties", { timeout: 2000 });
        setProperties(response.data.slice(0, 3));
      } catch (error) {
        console.warn("API unreachable, switching to luxury mock data.");
        setProperties(MOCK_PROPERTIES);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <section className="py-32 bg-luxury-black relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px]">
                Curated Selection
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="editorial-heading text-5xl md:text-7xl text-white mb-6"
            >
              Elite <span className="italic text-gold">Portfolios</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/40 text-lg font-light max-w-md"
            >
              A handpicked collection of the world&apos;s most exceptional architectural achievements.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-0"
          >
            <Link href="/search">
              <Magnetic>
                <Button className="group bg-white/5 hover:bg-gold text-white hover:text-black border border-white/10 hover:border-gold transition-all duration-500 rounded-full px-8 py-6">
                  Explore Full Collection 
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Magnetic>
            </Link>
          </motion.div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-6">
            <Loader2 className="w-12 h-12 text-gold animate-spin" />
            <span className="text-gold font-bold uppercase tracking-widest text-[10px]">Assembling Gallery...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {properties.length > 0 ? properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <PropertyCard property={property} />
              </motion.div>
            )) : (
              <div className="col-span-full text-center text-white/20 py-20 border border-dashed border-white/10 rounded-[3rem]">
                No featured properties available at the moment.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedListings;

