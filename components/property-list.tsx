import { featuredProperties } from "@/lib/sample-data"
import PropertyCard from "./property-card"

export default function PropertyList({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // In a real app, this would fetch from the database based on searchParams
  // For now, we'll filter the sample data
  let filteredProperties = [...featuredProperties]

  // Apply filters based on searchParams
  if (searchParams.location) {
    const location = String(searchParams.location).toLowerCase()
    filteredProperties = filteredProperties.filter((property) => property.location.toLowerCase().includes(location))
  }

  if (searchParams.type) {
    const type = String(searchParams.type).toLowerCase()
    filteredProperties = filteredProperties.filter((property) => property.propertyType.toLowerCase() === type)
  }

  if (searchParams.budget) {
    const budget = String(searchParams.budget)
    const [min, max] = budget.split("-").map(Number)

    if (budget.endsWith("+")) {
      const minValue = Number.parseInt(budget)
      filteredProperties = filteredProperties.filter((property) => property.price >= minValue)
    } else if (min && max) {
      filteredProperties = filteredProperties.filter((property) => property.price >= min && property.price <= max)
    }
  }

  if (searchParams.bhk) {
    const bhk = Number(searchParams.bhk)
    filteredProperties = filteredProperties.filter(
      (property) => property.bhk === bhk || (searchParams.bhk === "4+" && property.bhk >= 4),
    )
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <p className="mb-0">{filteredProperties.length} properties found</p>
        <div className="d-flex align-items-center">
          <label htmlFor="sortBy" className="me-2">
            Sort by:
          </label>
          <select className="form-select form-select-sm" id="sortBy" style={{ width: "auto" }}>
            <option value="relevance">Relevance</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
            <option value="date_new">Newest First</option>
          </select>
        </div>
      </div>

      {filteredProperties.length > 0 ? (
        <div className="row g-4">
          {filteredProperties.map((property) => (
            <div key={property.id} className="col-md-6 col-lg-6">
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-5">
          <i className="bi bi-search fs-1 text-muted mb-3"></i>
          <h4>No properties found</h4>
          <p className="text-muted">Try adjusting your search filters</p>
        </div>
      )}
    </div>
  )
}
