import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">PropertyDirect</h5>
            <p className="text-muted">
              Find your perfect home without paying broker fees. Connect directly with property owners and tenants.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-md-2 mb-4 mb-md-0">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/" className="text-decoration-none text-muted">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/properties" className="text-decoration-none text-muted">
                  Properties
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/post-property" className="text-decoration-none text-muted">
                  Post Property
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-decoration-none text-muted">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-decoration-none text-muted">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-2 mb-4 mb-md-0">
            <h6 className="mb-3">Property Types</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/properties?type=apartment" className="text-decoration-none text-muted">
                  Apartments
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/properties?type=house" className="text-decoration-none text-muted">
                  Houses
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/properties?type=villa" className="text-decoration-none text-muted">
                  Villas
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/properties?type=commercial" className="text-decoration-none text-muted">
                  Commercial
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/properties?type=pg" className="text-decoration-none text-muted">
                  PG/Hostels
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="mb-3">Subscribe to Newsletter</h6>
            <p className="text-muted">Get the latest property listings and updates</p>
            <form className="mt-3">
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Your Email" aria-label="Your Email" />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <hr className="my-4 bg-light" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-muted">&copy; {new Date().getFullYear()} PropertyDirect. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <Link href="/terms" className="text-decoration-none text-muted">
                  Terms
                </Link>
              </li>
              <li className="list-inline-item ms-3">
                <Link href="/privacy" className="text-decoration-none text-muted">
                  Privacy
                </Link>
              </li>
              <li className="list-inline-item ms-3">
                <Link href="/cookies" className="text-decoration-none text-muted">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
