export interface Property {
  id: string
  title: string
  description: string
  price: number
  location: string
  area: number
  bhk: number
  bathrooms: number
  furnishing: "Unfurnished" | "Semi-Furnished" | "Fully Furnished"
  floor: number
  totalFloors: number
  facing: string
  propertyType: string
  listingType: "Rent" | "Sale"
  ownerType: "Owner" | "Builder"
  amenities: string[]
  imageUrl: string
  images: string[]
  postedOn: string
  isVerified: boolean
  contactName: string
  contactPhone: string
  contactEmail: string
}

export interface User {
  id: string
  name: string
  email: string
  phone: string
  role: "User" | "Owner" | "Admin"
  properties: string[]
  favorites: string[]
  createdAt: string
}

export interface SearchFilters {
  location?: string
  propertyType?: string
  listingType?: string
  minPrice?: number
  maxPrice?: number
  bhk?: number
  furnishing?: string
  ownerType?: string
}
