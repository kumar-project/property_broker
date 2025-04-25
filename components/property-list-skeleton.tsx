export default function PropertyListSkeleton() {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="placeholder-glow">
          <span className="placeholder col-4"></span>
        </div>
        <div className="d-flex align-items-center">
          <div className="placeholder-glow me-2">
            <span className="placeholder col-4"></span>
          </div>
          <div className="placeholder-glow" style={{ width: "120px" }}>
            <span className="placeholder col-12"></span>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="col-md-6 col-lg-6">
            <div className="card property-card border-0 shadow-sm h-100">
              <div className="placeholder-glow">
                <span className="placeholder col-12" style={{ height: "200px" }}></span>
              </div>
              <div className="card-body p-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="card-title mb-0 placeholder-glow">
                    <span className="placeholder col-8"></span>
                  </h5>
                  <span className="placeholder-glow">
                    <span className="placeholder col-4"></span>
                  </span>
                </div>
                <p className="card-text placeholder-glow mb-2">
                  <span className="placeholder col-7"></span>
                </p>
                <div className="d-flex justify-content-between mb-3">
                  <span className="placeholder-glow">
                    <span className="placeholder col-8"></span>
                  </span>
                  <span className="placeholder-glow">
                    <span className="placeholder col-8"></span>
                  </span>
                  <span className="placeholder-glow">
                    <span className="placeholder col-8"></span>
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="placeholder-glow">
                    <span className="placeholder col-8"></span>
                  </span>
                  <span className="placeholder-glow">
                    <span className="placeholder col-4"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
