"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)
  const pathname = usePathname()

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <span className="fs-4 fw-bold text-primary">PropertyDirect</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className={`nav-link ${pathname === "/" ? "active fw-bold" : ""}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/properties" className={`nav-link ${pathname === "/properties" ? "active fw-bold" : ""}`}>
                Properties
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/post-property"
                className={`nav-link ${pathname === "/post-property" ? "active fw-bold" : ""}`}
              >
                Post Property
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className={`nav-link ${pathname === "/about" ? "active fw-bold" : ""}`}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className={`nav-link ${pathname === "/contact" ? "active fw-bold" : ""}`}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="d-flex ms-lg-3">
            <Link href="/login" className="btn btn-outline-primary me-2">
              Login
            </Link>
            <Link href="/signup" className="btn btn-primary">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
