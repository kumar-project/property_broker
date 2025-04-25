"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SearchForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    location: "",
    propertyType: "",
    budget: "",
    bhk: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Build query string from form data
    const params = new URLSearchParams()

    if (formData.location) params.append("location", formData.location)
    if (formData.propertyType) params.append("type", formData.propertyType)
    if (formData.budget) params.append("budget", formData.budget)
    if (formData.bhk) params.append("bhk", formData.bhk)

    // Navigate to properties page with search params
    router.push(`/properties?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-md-3">
          <select
            className="form-select"
            name="location"
            value={formData.location}
            onChange={handleChange}
            aria-label="Location"
          >
            <option value="">Select Location</option>
            <option value="new-york">New York</option>
            <option value="los-angeles">Los Angeles</option>
            <option value="chicago">Chicago</option>
            <option value="houston">Houston</option>
            <option value="miami">Miami</option>
          </select>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            aria-label="Property Type"
          >
            <option value="">Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
            <option value="commercial">Commercial</option>
            <option value="pg">PG/Hostel</option>
          </select>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            aria-label="Budget"
          >
            <option value="">Budget</option>
            <option value="0-1000">$0 - $1,000</option>
            <option value="1000-2000">$1,000 - $2,000</option>
            <option value="2000-3000">$2,000 - $3,000</option>
            <option value="3000-5000">$3,000 - $5,000</option>
            <option value="5000+">$5,000+</option>
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-select" name="bhk" value={formData.bhk} onChange={handleChange} aria-label="BHK">
            <option value="">BHK</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4">4 BHK</option>
            <option value="4+">4+ BHK</option>
          </select>
        </div>
        <div className="col-12 mt-3">
          <button type="submit" className="btn btn-primary w-100 py-2">
            Search Properties
          </button>
        </div>
      </div>
    </form>
  )
}
