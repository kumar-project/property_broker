"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function PostPropertyPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    // Basic Details
    title: "",
    description: "",
    propertyType: "",
    listingType: "",

    // Location Details
    location: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",

    // Property Features
    price: "",
    area: "",
    bhk: "",
    bathrooms: "",
    furnishing: "",
    floor: "",
    totalFloors: "",
    facing: "",

    // Amenities
    amenities: [] as string[],

    // Contact Details
    contactName: "",
    contactPhone: "",
    contactEmail: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target

    if (checked) {
      setFormData((prev) => ({
        ...prev,
        amenities: [...prev.amenities, value],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        amenities: prev.amenities.filter((item) => item !== value),
      }))
    }
  }

  const nextStep = () => {
    setStep((prev) => prev + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      // In a real app, this would send data to the server
      console.log("Property submitted:", formData)
      setIsSubmitting(false)
      router.push("/post-property/success")
    }, 2000)
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h1 className="mb-4 text-center">Post Your Property</h1>

              {/* Progress Bar */}
              <div className="mb-5">
                <div className="d-flex justify-content-between mb-2">
                  <span className={step >= 1 ? "fw-medium" : "text-muted"}>Basic Details</span>
                  <span className={step >= 2 ? "fw-medium" : "text-muted"}>Property Features</span>
                  <span className={step >= 3 ? "fw-medium" : "text-muted"}>Amenities</span>
                  <span className={step >= 4 ? "fw-medium" : "text-muted"}>Contact Info</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: `${(step / 4) * 100}%` }}
                    aria-valuenow={(step / 4) * 100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Basic Details */}
                {step === 1 && (
                  <div>
                    <h4 className="mb-4">Basic Details</h4>

                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">
                        Property Title*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="e.g., Modern 2BHK Apartment in Downtown"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Description*
                      </label>
                      <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        rows={4}
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe your property in detail"
                        required
                      ></textarea>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="propertyType" className="form-label">
                          Property Type*
                        </label>
                        <select
                          className="form-select"
                          id="propertyType"
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Property Type</option>
                          <option value="Apartment">Apartment</option>
                          <option value="House">House</option>
                          <option value="Villa">Villa</option>
                          <option value="Penthouse">Penthouse</option>
                          <option value="Commercial">Commercial</option>
                          <option value="PG/Hostel">PG/Hostel</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="listingType" className="form-label">
                          Listing Type*
                        </label>
                        <select
                          className="form-select"
                          id="listingType"
                          name="listingType"
                          value={formData.listingType}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Listing Type</option>
                          <option value="Rent">Rent</option>
                          <option value="Sale">Sale</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="location" className="form-label">
                        Location*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g., Downtown, New York"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">
                        Address*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Street Address"
                        required
                      />
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-4">
                        <label htmlFor="city" className="form-label">
                          City*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="state" className="form-label">
                          State*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="zipCode" className="form-label">
                          Zip Code*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="d-flex justify-content-end mt-4">
                      <button type="button" className="btn btn-primary px-4" onClick={nextStep}>
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Property Features */}
                {step === 2 && (
                  <div>
                    <h4 className="mb-4">Property Features</h4>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="price" className="form-label">
                          Price ($)*
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="price"
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          placeholder="e.g., 2500"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="area" className="form-label">
                          Area (sq.ft)*
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="area"
                          name="area"
                          value={formData.area}
                          onChange={handleChange}
                          placeholder="e.g., 1200"
                          required
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="bhk" className="form-label">
                          BHK*
                        </label>
                        <select
                          className="form-select"
                          id="bhk"
                          name="bhk"
                          value={formData.bhk}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select BHK</option>
                          <option value="1">1 BHK</option>
                          <option value="2">2 BHK</option>
                          <option value="3">3 BHK</option>
                          <option value="4">4 BHK</option>
                          <option value="5">5+ BHK</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="bathrooms" className="form-label">
                          Bathrooms*
                        </label>
                        <select
                          className="form-select"
                          id="bathrooms"
                          name="bathrooms"
                          value={formData.bathrooms}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Bathrooms</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5+</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="furnishing" className="form-label">
                        Furnishing*
                      </label>
                      <select
                        className="form-select"
                        id="furnishing"
                        name="furnishing"
                        value={formData.furnishing}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Furnishing</option>
                        <option value="Unfurnished">Unfurnished</option>
                        <option value="Semi-Furnished">Semi-Furnished</option>
                        <option value="Fully Furnished">Fully Furnished</option>
                      </select>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="floor" className="form-label">
                          Floor*
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="floor"
                          name="floor"
                          value={formData.floor}
                          onChange={handleChange}
                          placeholder="e.g., 5"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="totalFloors" className="form-label">
                          Total Floors*
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="totalFloors"
                          name="totalFloors"
                          value={formData.totalFloors}
                          onChange={handleChange}
                          placeholder="e.g., 10"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="facing" className="form-label">
                        Facing
                      </label>
                      <select
                        className="form-select"
                        id="facing"
                        name="facing"
                        value={formData.facing}
                        onChange={handleChange}
                      >
                        <option value="">Select Facing</option>
                        <option value="North">North</option>
                        <option value="South">South</option>
                        <option value="East">East</option>
                        <option value="West">West</option>
                        <option value="North-East">North-East</option>
                        <option value="North-West">North-West</option>
                        <option value="South-East">South-East</option>
                        <option value="South-West">South-West</option>
                      </select>
                    </div>

                    <div className="d-flex justify-content-between mt-4">
                      <button type="button" className="btn btn-outline-secondary px-4" onClick={prevStep}>
                        Previous
                      </button>
                      <button type="button" className="btn btn-primary px-4" onClick={nextStep}>
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Amenities */}
                {step === 3 && (
                  <div>
                    <h4 className="mb-4">Amenities</h4>

                    <div className="row g-3">
                      {[
                        "Gym",
                        "Swimming Pool",
                        "Security",
                        "Parking",
                        "Power Backup",
                        "Lift",
                        "Garden",
                        "Clubhouse",
                        "Children's Play Area",
                        "Sports Facility",
                        "Wifi",
                        "Air Conditioning",
                        "Laundry",
                        "Balcony",
                        "Study Room",
                        "Home Theater",
                        "Spa",
                        "Cafeteria",
                        "Conference Room",
                        "Terrace",
                      ].map((amenity, index) => (
                        <div key={index} className="col-md-6">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`amenity-${index}`}
                              value={amenity}
                              checked={formData.amenities.includes(amenity)}
                              onChange={handleCheckboxChange}
                            />
                            <label className="form-check-label" htmlFor={`amenity-${index}`}>
                              {amenity}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="d-flex justify-content-between mt-4">
                      <button type="button" className="btn btn-outline-secondary px-4" onClick={prevStep}>
                        Previous
                      </button>
                      <button type="button" className="btn btn-primary px-4" onClick={nextStep}>
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Contact Details */}
                {step === 4 && (
                  <div>
                    <h4 className="mb-4">Contact Details</h4>

                    <div className="mb-3">
                      <label htmlFor="contactName" className="form-label">
                        Name*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="contactPhone" className="form-label">
                        Phone*
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="contactPhone"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="contactEmail" className="form-label">
                        Email*
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="contactEmail"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="termsCheck" required />
                      <label className="form-check-label" htmlFor="termsCheck">
                        I agree to the{" "}
                        <a href="/terms" className="text-decoration-none">
                          Terms and Conditions
                        </a>
                      </label>
                    </div>

                    <div className="d-flex justify-content-between mt-4">
                      <button type="button" className="btn btn-outline-secondary px-4" onClick={prevStep}>
                        Previous
                      </button>
                      <button type="submit" className="btn btn-primary px-4" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Submitting...
                          </>
                        ) : (
                          "Submit Property"
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
