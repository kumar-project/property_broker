"use client"

import type React from "react"

import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Contact form submitted:", formData)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h1 className="display-5 fw-bold mb-4">Contact Us</h1>
          <p className="lead mb-4">
            Have questions or feedback? We'd love to hear from you. Fill out the form and our team will get back to you
            as soon as possible.
          </p>

          <div className="d-flex align-items-center mb-4">
            <div className="me-3 text-primary">
              <i className="bi bi-geo-alt fs-4"></i>
            </div>
            <div>
              <h5 className="mb-0">Our Office</h5>
              <p className="text-muted mb-0">123 Business Avenue, Suite 100, New York, NY 10001</p>
            </div>
          </div>

          <div className="d-flex align-items-center mb-4">
            <div className="me-3 text-primary">
              <i className="bi bi-envelope fs-4"></i>
            </div>
            <div>
              <h5 className="mb-0">Email Us</h5>
              <p className="text-muted mb-0">info@propertydirect.com</p>
            </div>
          </div>

          <div className="d-flex align-items-center mb-4">
            <div className="me-3 text-primary">
              <i className="bi bi-telephone fs-4"></i>
            </div>
            <div>
              <h5 className="mb-0">Call Us</h5>
              <p className="text-muted mb-0">+1 (123) 456-7890</p>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <div className="me-3 text-primary">
              <i className="bi bi-clock fs-4"></i>
            </div>
            <div>
              <h5 className="mb-0">Business Hours</h5>
              <p className="text-muted mb-0">Monday - Friday: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              {isSubmitted ? (
                <div className="text-center py-5">
                  <div className="display-1 text-success mb-4">
                    <i className="bi bi-check-circle-fill"></i>
                  </div>
                  <h3 className="mb-3">Thank You!</h3>
                  <p className="text-muted mb-4">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                  <button className="btn btn-primary" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <select
                      className="form-select"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Property Listing">Property Listing</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-100 py-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-0">
              <div className="ratio ratio-21x9">
                <div className="bg-light d-flex align-items-center justify-content-center">
                  <div className="text-center">
                    <i className="bi bi-map fs-1 text-muted mb-2"></i>
                    <p>Map view would be displayed here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2 className="fw-bold">Frequently Asked Questions</h2>
          <p className="text-muted">Find quick answers to common questions</p>
        </div>

        <div className="col-lg-6 mb-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h5 className="mb-3">How does PropertyDirect work?</h5>
              <p className="text-muted mb-0">
                PropertyDirect connects property owners directly with tenants and buyers, eliminating the need for
                brokers. Owners list their properties, and seekers can search and contact them directly through our
                platform.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h5 className="mb-3">Is it free to list my property?</h5>
              <p className="text-muted mb-0">
                Yes, basic property listings are completely free. We also offer premium listing options for better
                visibility and additional features.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h5 className="mb-3">How do you verify property listings?</h5>
              <p className="text-muted mb-0">
                We have a dedicated team that verifies property details and ownership documents to ensure all listings
                on our platform are authentic and accurate.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h5 className="mb-3">Can I schedule property visits through the platform?</h5>
              <p className="text-muted mb-0">
                Yes, you can request property visits through our platform. Once the owner approves, you'll receive
                confirmation and can coordinate the visit directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
