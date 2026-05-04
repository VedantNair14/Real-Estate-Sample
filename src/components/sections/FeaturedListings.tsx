"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropertyCard from "../shared/PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import axios from "axios";
import Link from "next/link";

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
