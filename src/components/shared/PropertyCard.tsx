"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Bed, Bath, Square, Heart, MapPin } from "lucide-react";
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
    ? `$${property.price.toLocaleString()}` 
    : property.price;
  const displayCategory = property.category || property.property_type || "Luxury";

  return (
    <Link href={`/property/${property.id}`} className="block">
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
      >
      {/* Image Section */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={displayImage}
          alt={property.title}
          fill
          unoptimized={true}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <Badge className="bg-white/90 text-luxury-black border-none hover:bg-white">{displayCategory}</Badge>
          {(displayCategory === "Exclusive" || displayCategory === "Penthouse") && (
            <Badge className="bg-gold text-white border-none">Top Rated</Badge>
          )}
        </div>

        {/* Favorite Button */}
        <button 
          onClick={handleFavoriteClick}
          className={`absolute top-4 right-4 p-2.5 rounded-full glass transition-colors z-20 ${
            favorite ? "bg-gold text-white" : "text-white hover:bg-gold"
          }`}
        >
          <Heart className={`w-4 h-4 ${favorite ? "fill-current" : ""}`} />
        </button>

        {/* Price Tag (Floating) */}
        <div className="absolute bottom-6 left-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <p className="text-3xl font-bold tracking-tight">{displayPrice}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center text-muted-foreground text-xs uppercase tracking-widest mb-1 font-semibold">
              <MapPin className="w-3 h-3 mr-1" />
              {property.location}
            </div>
            <h3 className="text-xl font-bold text-luxury-black group-hover:text-gold transition-colors">
              {property.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <Bed className="w-4 h-4 text-gold" />
              <span>{property.beds}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="w-4 h-4 text-gold" />
              <span>{property.baths}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Square className="w-4 h-4 text-gold" />
              <span>{property.sqft} <span className="text-[10px]">sqft</span></span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    </Link>
  );
};

export default PropertyCard;
