import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card border-0 shadow-sm text-center p-4">
            <div className="py-4">
              <div className="display-1 text-success mb-4">
                <i className="bi bi-check-circle-fill"></i>
              </div>
              <h1 className="mb-3">Property Posted Successfully!</h1>
              <p className="text-muted mb-4">
                Your property has been submitted for review. Once approved, it will be visible to potential
                buyers/tenants.
              </p>
              <div className="d-grid gap-3">
                <Link href="/properties" className="btn btn-primary">
                  Browse Properties
                </Link>
                <Link href="/post-property" className="btn btn-outline-primary">
                  Post Another Property
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
