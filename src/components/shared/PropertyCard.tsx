"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Bed, Bath, Square, Heart, MapPin, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useEstateStore } from "@/store/useEstateStore";

interface PropertyProps {
  id: string | number;
  title: string;
  price: string | number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image?: string;
  main_image?: string;
  category?: string;
  property_type?: string;
}

const PropertyCard = ({ property }: { property: PropertyProps }) => {
  const { isFavorite, addFavorite, removeFavorite } = useEstateStore();
  const favorite = isFavorite(property.id.toString());

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (favorite) {
      removeFavorite(property.id.toString());
    } else {
      addFavorite({
        id: property.id.toString(),
        title: property.title,
        price: property.price.toString(),
        location: property.location,
        beds: property.beds,
        baths: property.baths,
        sqft: property.sqft,
        image: property.main_image || property.image || "",
        category: property.category || property.property_type || "Luxury",
      });
    }
  };

  const displayImage = property.main_image || property.image || "https://images.unsplash.com/photo-1600585154340-be6199f7e009?auto=format&fit=crop&w=800";
  const displayPrice = typeof property.price === "number" 
    ? `$${(property.price / 1000000).toFixed(1)}M` 
    : property.price;
  const displayCategory = property.category || property.property_type || "Luxury";

  return (
    <Link href={`/property/${property.id}`} className="block group">
      <motion.div
        className="relative bg-luxury-dark rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-gold/20 transition-all duration-700"
      >
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={displayImage}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
          
          {/* Top Actions */}
          <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
            <Badge className="bg-white/10 backdrop-blur-md text-white border-white/10 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold">
              {displayCategory}
            </Badge>
            <button 
              onClick={handleFavoriteClick}
              className={`p-3 rounded-full glass transition-all duration-500 hover:scale-110 ${
                favorite ? "bg-gold text-white" : "bg-black/20 text-white hover:bg-gold/80"
              }`}
            >
              <Heart className={`w-4 h-4 ${favorite ? "fill-current" : ""}`} />
            </button>
          </div>

          {/* Price Overlay */}
          <div className="absolute bottom-8 left-8 right-8">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="flex items-end justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold text-gold tracking-[0.3em] mb-1 block">Asking Price</span>
                <p className="text-4xl font-bold text-white tracking-tighter">{displayPrice}</p>
              </div>
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                <ChevronRight className="w-5 h-5 text-white" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-3 h-3 text-gold" />
            <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{property.location}</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-gold transition-colors duration-500">
            {property.title}
          </h3>

          <div className="flex items-center gap-6 pt-6 border-t border-white/5">
            <div className="flex items-center gap-2">
              <Bed className="w-4 h-4 text-white/20" />
              <span className="text-sm font-medium text-white/60">{property.beds} <span className="text-[10px] opacity-40 uppercase ml-1">Beds</span></span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-4 h-4 text-white/20" />
              <span className="text-sm font-medium text-white/60">{property.baths} <span className="text-[10px] opacity-40 uppercase ml-1">Baths</span></span>
            </div>
            <div className="flex items-center gap-2">
              <Square className="w-4 h-4 text-white/20" />
              <span className="text-sm font-medium text-white/60">{(property.sqft / 1000).toFixed(1)}k <span className="text-[10px] opacity-40 uppercase ml-1">Sqft</span></span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default PropertyCard;
