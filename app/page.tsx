import Link from "next/link"
import Image from "next/image"
import SearchForm from "@/components/search-form"
import PropertyCard from "@/components/property-card"
import { featuredProperties } from "@/lib/sample-data"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">Find Your Perfect Home</h1>
              <p className="lead mb-4">Search properties without broker fees and connect directly with owners</p>
              <div className="search-box">
                <SearchForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="fw-bold">Featured Properties</h2>
              <p className="text-muted">Handpicked properties for you</p>
            </div>
          </div>
          <div className="row g-4">
            {featuredProperties.map((property) => (
              <div key={property.id} className="col-md-6 col-lg-4">
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/properties" className="btn btn-outline-primary px-4 py-2">
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="fw-bold">How It Works</h2>
              <p className="text-muted">Simple steps to find your dream property</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <div className="p-4">
                <div className="feature-icon mb-3">
                  <i className="bi bi-search"></i>
                </div>
                <h4>Search</h4>
                <p className="text-muted">Browse thousands of properties based on your preferences</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="p-4">
                <div className="feature-icon mb-3">
                  <i className="bi bi-chat-dots"></i>
                </div>
                <h4>Connect</h4>
                <p className="text-muted">Directly connect with property owners without middlemen</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="p-4">
                <div className="feature-icon mb-3">
                  <i className="bi bi-house-heart"></i>
                </div>
                <h4>Move In</h4>
                <p className="text-muted">Finalize the deal and move into your new home</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Save Money"
                width={600}
                height={400}
                className="img-fluid rounded-3 shadow"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Why Choose PropertyDirect?</h2>
              <div className="d-flex mb-3">
                <div className="me-3 text-primary">
                  <i className="bi bi-cash-coin fs-4"></i>
                </div>
                <div>
                  <h5>No Brokerage Fees</h5>
                  <p className="text-muted">Save thousands by avoiding broker commissions</p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="me-3 text-primary">
                  <i className="bi bi-shield-check fs-4"></i>
                </div>
                <div>
                  <h5>Verified Listings</h5>
                  <p className="text-muted">All properties are verified for authenticity</p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="me-3 text-primary">
                  <i className="bi bi-people fs-4"></i>
                </div>
                <div>
                  <h5>Direct Communication</h5>
                  <p className="text-muted">Talk directly with owners for better negotiation</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="me-3 text-primary">
                  <i className="bi bi-geo-alt fs-4"></i>
                </div>
                <div>
                  <h5>Neighborhood Insights</h5>
                  <p className="text-muted">Get detailed information about the locality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="fw-bold">What Our Users Say</h2>
              <p className="text-muted">Testimonials from happy customers</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3 text-warning">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p className="card-text mb-3">
                    "Found my dream apartment without paying any brokerage. The direct connection with the owner made
                    the process smooth and transparent."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle overflow-hidden me-3" style={{ width: "50px", height: "50px" }}>
                      <Image src="/placeholder.svg?height=50&width=50" alt="User" width={50} height={50} />
                    </div>
                    <div>
                      <h6 className="mb-0">Sarah Johnson</h6>
                      <small className="text-muted">Tenant</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3 text-warning">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p className="card-text mb-3">
                    "As a property owner, I was able to find reliable tenants quickly. The verification process gave me
                    confidence in selecting the right tenant."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle overflow-hidden me-3" style={{ width: "50px", height: "50px" }}>
                      <Image src="/placeholder.svg?height=50&width=50" alt="User" width={50} height={50} />
                    </div>
                    <div>
                      <h6 className="mb-0">Michael Chen</h6>
                      <small className="text-muted">Property Owner</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3 text-warning">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                  <p className="card-text mb-3">
                    "The neighborhood insights helped me choose the perfect location for my family. Saved a lot of time
                    and money by avoiding brokers."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle overflow-hidden me-3" style={{ width: "50px", height: "50px" }}>
                      <Image src="/placeholder.svg?height=50&width=50" alt="User" width={50} height={50} />
                    </div>
                    <div>
                      <h6 className="mb-0">Priya Sharma</h6>
                      <small className="text-muted">Homebuyer</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Ready to Find Your Perfect Home?</h2>
          <p className="mb-4">Join thousands of users who found their dream property without paying broker fees</p>
          <div className="d-flex justify-content-center gap-3">
            <Link href="/signup" className="btn btn-light text-primary px-4 py-2">
              Sign Up Now
            </Link>
            <Link href="/post-property" className="btn btn-outline-light px-4 py-2">
              Post Your Property
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
