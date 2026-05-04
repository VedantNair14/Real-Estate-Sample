"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import PropertyCard from "@/components/shared/PropertyCard";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, ChevronDown, MapPin, Home, DollarSign, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
import Image from "next/image";

import { MOCK_PROPERTIES } from "@/lib/mockData";

const BuyPage = () => {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("http://localhost:8001/api/properties", { timeout: 2000 });
        setProperties(response.data);
      } catch (error) {
        console.warn("API unreachable, switching to production fallback.");
        setProperties(MOCK_PROPERTIES.filter(p => p.status === "For Sale" || p.status === "Exclusive"));
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const filters = ["All", "Villa", "Penthouse", "Mansion", "Apartment"];

  const filteredProperties = activeFilter === "All" 
    ? properties 
    : properties.filter((p) => p.property_type === activeFilter);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          alt="Buy Properties"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="container px-6 mx-auto relative z-10 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-gold text-white border-none mb-4">For Sale</Badge>
            <h1 className="editorial-heading text-5xl md:text-7xl text-white mb-4">
              Buy Your <span className="italic">Dream Home</span>
            </h1>
            <p className="text-white/60 text-lg max-w-lg">
              Explore our curated collection of luxury properties available for purchase across premium locations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-5">
        <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  activeFilter === f
                    ? "bg-luxury-black text-white shadow-md"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search by location..." className="pl-10 h-11 rounded-xl bg-gray-50 border-none" />
            </div>
            <Button variant="outline" className="h-11 rounded-xl gap-2 shrink-0">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container px-6 mx-auto">
          <p className="text-gray-400 text-sm font-medium mb-8">
            Showing <span className="text-luxury-black font-bold">{filteredProperties.length}</span> exclusive properties for sale
          </p>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-10 h-10 text-gold animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, i) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </div>
          )}

          {!loading && filteredProperties.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-xl font-bold mb-2">No properties found</h3>
              <p className="text-gray-400">Try adjusting your filters or search criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BuyPage;
