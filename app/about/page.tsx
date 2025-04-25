import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h1 className="display-5 fw-bold mb-4">About PropertyDirect</h1>
          <p className="lead mb-4">
            We're on a mission to make property search and rental hassle-free by eliminating broker fees and connecting
            property owners directly with tenants and buyers.
          </p>
          <p className="mb-4">
            PropertyDirect was founded in 2023 with a simple idea: why pay broker fees when technology can connect
            property owners and seekers directly? Our platform provides a transparent marketplace where users can find
            their dream homes without the burden of brokerage.
          </p>
          <p>
            We verify all listings to ensure authenticity and provide detailed neighborhood insights to help you make
            informed decisions. Our goal is to revolutionize the real estate market by making it more accessible,
            affordable, and user-friendly.
          </p>
        </div>
        <div className="col-lg-6">
          <div className="position-relative rounded-3 overflow-hidden" style={{ height: "400px" }}>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="About PropertyDirect"
              fill
              className="object-fit-cover"
            />
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12 text-center mb-4">
          <h2 className="fw-bold">Our Values</h2>
          <p className="text-muted">The principles that guide everything we do</p>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4 text-center">
              <div className="feature-icon mb-3 text-primary">
                <i className="bi bi-shield-check fs-1"></i>
              </div>
              <h4>Trust & Transparency</h4>
              <p className="text-muted">
                We believe in complete transparency in all our operations. Every listing on our platform is verified to
                ensure authenticity.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4 text-center">
              <div className="feature-icon mb-3 text-primary">
                <i className="bi bi-cash-stack fs-1"></i>
              </div>
              <h4>Cost Efficiency</h4>
              <p className="text-muted">
                We're committed to helping our users save money by eliminating unnecessary broker fees and providing a
                direct connection.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4 text-center">
              <div className="feature-icon mb-3 text-primary">
                <i className="bi bi-people fs-1"></i>
              </div>
              <h4>User-Centric Approach</h4>
              <p className="text-muted">
                Our platform is designed with users in mind, making it easy to find, list, and connect with the right
                properties and people.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12 text-center mb-4">
          <h2 className="fw-bold">Our Team</h2>
          <p className="text-muted">Meet the people behind PropertyDirect</p>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-sm">
            <div className="position-relative" style={{ height: "300px" }}>
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="CEO"
                fill
                className="card-img-top object-fit-cover"
              />
            </div>
            <div className="card-body text-center p-4">
              <h4>Alex Johnson</h4>
              <p className="text-muted mb-3">CEO & Founder</p>
              <p className="small">
                With over 15 years of experience in real estate and technology, Alex founded PropertyDirect to
                revolutionize property search.
              </p>
              <div className="d-flex justify-content-center gap-2 mt-3">
                <a href="#" className="text-muted">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="text-muted">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-muted">
                  <i className="bi bi-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-sm">
            <div className="position-relative" style={{ height: "300px" }}>
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="CTO"
                fill
                className="card-img-top object-fit-cover"
              />
            </div>
            <div className="card-body text-center p-4">
              <h4>Samantha Lee</h4>
              <p className="text-muted mb-3">CTO</p>
              <p className="small">
                A tech enthusiast with a background in AI and machine learning, Samantha leads our technology
                initiatives to create seamless user experiences.
              </p>
              <div className="d-flex justify-content-center gap-2 mt-3">
                <a href="#" className="text-muted">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="text-muted">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-muted">
                  <i className="bi bi-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-sm">
            <div className="position-relative" style={{ height: "300px" }}>
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="COO"
                fill
                className="card-img-top object-fit-cover"
              />
            </div>
            <div className="card-body text-center p-4">
              <h4>David Patel</h4>
              <p className="text-muted mb-3">COO</p>
              <p className="small">
                With extensive experience in operations and real estate, David ensures that our platform runs smoothly
                and efficiently.
              </p>
              <div className="d-flex justify-content-center gap-2 mt-3">
                <a href="#" className="text-muted">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="text-muted">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-muted">
                  <i className="bi bi-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2 className="fw-bold">Our Achievements</h2>
          <p className="text-muted">Milestones we've reached together</p>
        </div>

        <div className="col-md-3 mb-4 text-center">
          <div className="display-4 fw-bold text-primary mb-2">10K+</div>
          <p className="text-muted">Properties Listed</p>
        </div>

        <div className="col-md-3 mb-4 text-center">
          <div className="display-4 fw-bold text-primary mb-2">50K+</div>
          <p className="text-muted">Happy Users</p>
        </div>

        <div className="col-md-3 mb-4 text-center">
          <div className="display-4 fw-bold text-primary mb-2">$2M+</div>
          <p className="text-muted">Saved in Broker Fees</p>
        </div>

        <div className="col-md-3 mb-4 text-center">
          <div className="display-4 fw-bold text-primary mb-2">20+</div>
          <p className="text-muted">Cities Covered</p>
        </div>
      </div>
    </div>
  )
}
