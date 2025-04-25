"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function FilterSidebar() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [filters, setFilters] = useState({
    location: searchParams.get("location") || "",
    propertyType: searchParams.get("type") || "",
    listingType: searchParams.get("listingType") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    bhk: searchParams.get("bhk") || "",
    furnishing: searchParams.get("furnishing") || "",
    ownerType: searchParams.get("ownerType") || "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const applyFilters = () => {
    const params = new URLSearchParams()

    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value)
    })

    router.push(`/properties?${params.toString()}`)
  }

  const resetFilters = () => {
    setFilters({
      location: "",
      propertyType: "",
      listingType: "",
      minPrice: "",
      maxPrice: "",
      bhk: "",
      furnishing: "",
      ownerType: "",
    })

    router.push("/properties")
  }

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h5 className="card-title mb-4">Filter Properties</h5>

        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <select
            className="form-select"
            id="location"
            name="location"
            value={filters.location}
            onChange={handleChange}
          >
            <option value="">Any Location</option>
            <option value="new-york">New York</option>
            <option value="los-angeles">Los Angeles</option>
            <option value="chicago">Chicago</option>
            <option value="houston">Houston</option>
            <option value="miami">Miami</option>
            <option value="boston">Boston</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="propertyType" className="form-label">
            Property Type
          </label>
          <select
            className="form-select"
            id="propertyType"
            name="propertyType"
            value={filters.propertyType}
            onChange={handleChange}
          >
            <option value="">Any Type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
            <option value="penthouse">Penthouse</option>
            <option value="commercial">Commercial</option>
            <option value="pg">PG/Hostel</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="listingType" className="form-label">
            Listing Type
          </label>
          <select
            className="form-select"
            id="listingType"
            name="listingType"
            value={filters.listingType}
            onChange={handleChange}
          >
            <option value="">Rent or Sale</option>
            <option value="rent">Rent</option>
            <option value="sale">Sale</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Price Range</label>
          <div className="row g-2">
            <div className="col-6">
              <input
                type="number"
                className="form-control"
                placeholder="Min"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleChange}
              />
            </div>
            <div className="col-6">
              <input
                type="number"
                className="form-control"
                placeholder="Max"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="bhk" className="form-label">
            BHK
          </label>
          <select className="form-select" id="bhk" name="bhk" value={filters.bhk} onChange={handleChange}>
            <option value="">Any BHK</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4">4 BHK</option>
            <option value="4+">4+ BHK</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="furnishing" className="form-label">
            Furnishing
          </label>
          <select
            className="form-select"
            id="furnishing"
            name="furnishing"
            value={filters.furnishing}
            onChange={handleChange}
          >
            <option value="">Any Furnishing</option>
            <option value="unfurnished">Unfurnished</option>
            <option value="semi-furnished">Semi-Furnished</option>
            <option value="fully-furnished">Fully Furnished</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="ownerType" className="form-label">
            Posted By
          </label>
          <select
            className="form-select"
            id="ownerType"
            name="ownerType"
            value={filters.ownerType}
            onChange={handleChange}
          >
            <option value="">Any</option>
            <option value="owner">Owner</option>
            <option value="builder">Builder</option>
          </select>
        </div>

        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="button" onClick={applyFilters}>
            Apply Filters
          </button>
          <button className="btn btn-outline-secondary" type="button" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  )
}
