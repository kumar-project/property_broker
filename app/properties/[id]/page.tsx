import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { featuredProperties } from "@/lib/sample-data"
import PropertyCard from "@/components/property-card"
import ContactForm from "@/components/contact-form"

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  // In a real app, this would fetch from the database
  const property = featuredProperties.find((p) => p.id === params.id)

  if (!property) {
    notFound()
  }

  // Get similar properties (in a real app, this would be more sophisticated)
  const similarProperties = featuredProperties
    .filter((p) => p.id !== property.id && p.propertyType === property.propertyType)
    .slice(0, 3)

  return (
    <div className="container py-5">
      <div className="mb-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/" className="text-decoration-none">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/properties" className="text-decoration-none">
                Properties
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {property.title}
            </li>
          </ol>
        </nav>
      </div>

      <div className="row">
        <div className="col-lg-8">
          {/* Property Title and Basic Info */}
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h1 className="mb-2">{property.title}</h1>
                <p className="text-muted mb-2">
                  <i className="bi bi-geo-alt me-1"></i>
                  {property.location}
                </p>
              </div>
              <div className="text-end">
                <h3 className="text-primary mb-0">${property.price}</h3>
                <span className="badge bg-primary">{property.listingType}</span>
              </div>
            </div>
          </div>

          {/* Property Images */}
          <div className="mb-4">
            <div className="position-relative mb-3" style={{ height: "400px" }}>
              <Image
                src={property.images[0] || "/placeholder.svg"}
                alt={property.title}
                fill
                className="rounded-3 object-fit-cover"
              />
            </div>
            <div className="row g-2">
              {property.images.slice(1).map((img, index) => (
                <div key={index} className="col-4">
                  <div className="position-relative" style={{ height: "120px" }}>
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${property.title} - Image ${index + 2}`}
                      fill
                      className="rounded-3 object-fit-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Property Details */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <h4 className="mb-3">Property Details</h4>
              <div className="row g-3 mb-4">
                <div className="col-6 col-md-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-building fs-4 me-2 text-primary"></i>
                    <div>
                      <div className="small text-muted">BHK</div>
                      <div className="fw-medium">{property.bhk}</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-rulers fs-4 me-2 text-primary"></i>
                    <div>
                      <div className="small text-muted">Area</div>
                      <div className="fw-medium">{property.area} sq.ft</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-door-open fs-4 me-2 text-primary"></i>
                    <div>
                      <div className="small text-muted">Bathrooms</div>
                      <div className="fw-medium">{property.bathrooms}</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-house-door fs-4 me-2 text-primary"></i>
                    <div>
                      <div className="small text-muted">Furnishing</div>
                      <div className="fw-medium">{property.furnishing}</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-layers fs-4 me-2 text-primary"></i>
                    <div>
                      <div className="small text-muted">Floor</div>
                      <div className="fw-medium">
                        {property.floor} of {property.totalFloors}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-compass fs-4 me-2 text-primary"></i>
                    <div>
                      <div className="small text-muted">Facing</div>
                      <div className="fw-medium">{property.facing}</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-house fs-4 me-2 text-primary"></i>
                    <div>
                      <div className="small text-muted">Property Type</div>
                      <div className="fw-medium">{property.propertyType}</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-person fs-4 me-2 text-primary"></i>
                    <div>
                      <div className="small text-muted">Posted By</div>
                      <div className="fw-medium">{property.ownerType}</div>
                    </div>
                  </div>
                </div>
              </div>

              <h4 className="mb-3">Description</h4>
              <p>{property.description}</p>

              <h4 className="mb-3">Amenities</h4>
              <div className="row g-3">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="col-md-4">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      <span>{amenity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Location Map Placeholder */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <h4 className="mb-3">Location</h4>
              <div className="ratio ratio-16x9">
                <div className="bg-light d-flex align-items-center justify-content-center rounded-3">
                  <div className="text-center">
                    <i className="bi bi-map fs-1 text-muted mb-2"></i>
                    <p>Map view would be displayed here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          {/* Contact Owner Card */}
          <div className="card border-0 shadow-sm mb-4 sticky-lg-top" style={{ top: "20px" }}>
            <div className="card-body">
              <h4 className="mb-3">Contact Owner</h4>
              <div className="d-flex align-items-center mb-4">
                <div className="rounded-circle overflow-hidden me-3" style={{ width: "60px", height: "60px" }}>
                  <Image src="/placeholder.svg?height=60&width=60" alt="Owner" width={60} height={60} />
                </div>
                <div>
                  <h5 className="mb-0">{property.contactName}</h5>
                  <p className="text-muted mb-0">{property.ownerType}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-telephone me-2 text-primary"></i>
                  <span>{property.contactPhone}</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-envelope me-2 text-primary"></i>
                  <span>{property.contactEmail}</span>
                </div>
              </div>

              <ContactForm propertyId={property.id} />
            </div>
          </div>
        </div>
      </div>

      {/* Similar Properties */}
      <div className="mt-5">
        <h3 className="mb-4">Similar Properties</h3>
        <div className="row g-4">
          {similarProperties.map((property) => (
            <div key={property.id} className="col-md-6 col-lg-4">
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
