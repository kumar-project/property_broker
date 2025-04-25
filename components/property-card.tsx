import Link from "next/link"
import Image from "next/image"
import type { Property } from "@/lib/types"

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="card property-card border-0 shadow-sm h-100">
      <div className="position-relative">
        <Image
          src={property.imageUrl || "/placeholder.svg?height=200&width=400"}
          alt={property.title}
          width={400}
          height={200}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="position-absolute top-0 start-0 m-2">
          <span className="badge bg-primary">{property.listingType}</span>
        </div>
        <div className="position-absolute top-0 end-0 m-2">
          <span className="badge bg-success">{property.isVerified ? "Verified" : ""}</span>
        </div>
      </div>
      <div className="card-body p-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title mb-0 text-truncate">{property.title}</h5>
          <span className="fw-bold text-primary">${property.price}</span>
        </div>
        <p className="card-text text-muted small mb-2">
          <i className="bi bi-geo-alt me-1"></i>
          {property.location}
        </p>
        <div className="d-flex justify-content-between mb-3">
          <span className="small">
            <i className="bi bi-building me-1"></i>
            {property.bhk} BHK
          </span>
          <span className="small">
            <i className="bi bi-rulers me-1"></i>
            {property.area} sq.ft
          </span>
          <span className="small">
            <i className="bi bi-calendar-date me-1"></i>
            {property.postedOn}
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <span className="small text-muted">
            <i className="bi bi-person me-1"></i>
            {property.ownerType}
          </span>
          <Link href={`/properties/${property.id}`} className="btn btn-sm btn-outline-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}
