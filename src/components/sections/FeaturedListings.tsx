"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropertyCard from "../shared/PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import axios from "axios";
import Link from "next/link";

const FeaturedListings = () => {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("http://localhost:8001/api/properties");
        setProperties(response.data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching featured properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <section className="py-28 bg-white">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
              Curated Selection
            </span>
            <h2 className="editorial-heading text-4xl md:text-6xl text-luxury-black">
              Featured <span className="italic">Properties</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-8 md:mt-0"
          >
            <Link href="/search">
              <Button variant="ghost" className="group text-luxury-black hover:text-gold transition-colors font-semibold tracking-wide">
                View All Properties 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-gold animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.length > 0 ? properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            )) : (
              <div className="col-span-full text-center text-gray-400 py-10">
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
