import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  category: string;
}

interface EstateStore {
  favorites: Property[];
  addFavorite: (property: Property) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  filters: {
    propertyType: string;
    priceRange: [number, number];
    beds: number;
  };
  setFilter: (key: string, value: any) => void;
}

export const useEstateStore = create<EstateStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (property) => set((state) => ({ 
        favorites: [...state.favorites, property] 
      })),
      removeFavorite: (id) => set((state) => ({ 
        favorites: state.favorites.filter((p) => p.id !== id) 
      })),
      isFavorite: (id) => get().favorites.some((p) => p.id === id),
      
      searchQuery: '',
      setSearchQuery: (query) => set({ searchQuery: query }),
      
      filters: {
        propertyType: 'All',
        priceRange: [0, 10000000],
        beds: 0,
      },
      setFilter: (key, value) => set((state) => ({
        filters: { ...state.filters, [key]: value }
      })),
    }),
    {
      name: 'estate-storage',
    }
  )
);
