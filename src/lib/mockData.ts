export const MOCK_PROPERTIES = [
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
    status: "For Sale",
    description: "A breathtaking architectural masterpiece nestled in the heart of Malibu. This glass pavilion offers panoramic ocean views, a private infinity pool, and a state-of-the-art chef's kitchen. Perfect for those who seek the ultimate indoor-outdoor living experience."
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
    status: "For Sale",
    description: "Experience the pinnacle of urban luxury in this Manhattan penthouse. Featuring floor-to-ceiling windows with views of Central Park, a private rooftop garden, and world-class interior design."
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
    status: "Exclusive",
    description: "A stunning coastal estate with direct beach access. This mansion features a private dock, a home cinema, and a sprawling master suite with 180-degree ocean views."
  },
  {
    id: 4,
    title: "Sunset Loft Suite",
    location: "Santa Monica, CA",
    price: 8500,
    beds: 2,
    baths: 2,
    sqft: 1800,
    property_type: "Loft",
    main_image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200",
    status: "For Rent",
    description: "A chic, modern loft in the heart of Santa Monica. High ceilings, industrial finishes, and walking distance to the beach."
  },
  {
    id: 5,
    title: "The Grand Penthouse",
    location: "Manhattan, NY",
    price: 25000,
    beds: 4,
    baths: 4,
    sqft: 4200,
    property_type: "Penthouse",
    main_image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200",
    status: "For Rent",
    description: "Ultra-luxury rental experience in one of Manhattan's most prestigious towers. Full concierge service included."
  },
  {
    id: 6,
    title: "Hillside Garden Estate",
    location: "Beverly Hills, CA",
    price: 22000,
    beds: 6,
    baths: 7,
    sqft: 7000,
    property_type: "Mansion",
    main_image: "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&w=1200",
    status: "For Rent",
    description: "Sprawling estate with lush gardens and total privacy. Features a professional-grade tennis court and guest house."
  }
];

export const getMockProperty = (id: string | number) => {
  return MOCK_PROPERTIES.find(p => p.id.toString() === id.toString()) || MOCK_PROPERTIES[0];
};
