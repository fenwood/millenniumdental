import { Outlet } from "@remix-run/react"

function Services() {
  return (
    <>
      <Outlet />
      <div className="page-container">
        <div className="row-top">
          <div className="products-heading">
            <h2>Our Services</h2>
          </div>

          <div className="services-container">
            <div className="pricing-box-wrap">
              <div className="pricing-heading">
                <h3>
                  <strong>Cosmetic</strong>
                </h3>
              </div>
              <div className="pricing-content">
                <ul>
                  <li>
                    <i className="ri-check-line"></i>Teeth Whitening
                  </li>
                  <li>
                    <i className="ri-check-line"></i>Veneers
                  </li>
                  <li>
                    <i className="ri-check-line"></i>Scaling
                  </li>
                  <li>
                    <i className="ri-check-line"></i>Bridges & Bonding
                  </li>
                  <li>
                    <i className="ri-check-line"></i>Cleaning
                  </li>
                </ul>
              </div>
              <div className="pricing-action"></div>
            </div>
            <div className="pricing-box-wrap special">
              <div className="pricing-heading">
                <h3>
                  <strong>Periodontics</strong>
                </h3>
              </div>
              <div className="pricing-content">
                <ul>
                  <li>
                    <i className="ri-check-line"></i>Root planing
                  </li>
                  <li>
                    <i className="ri-check-line"></i>Gingival grafts
                  </li>
                  <li>
                    <i className="ri-check-line"></i>Gingivectomy
                  </li>
                  <li>
                    <i className="ri-check-line"></i>Lasers
                  </li>
                  <li>
                    <i className="ri-check-line"></i>Crown lengthening
                  </li>
                </ul>
              </div>
              <div className="pricing-action"></div>
            </div>
            <div className="pricing-box-wrap">
              <div className="pricing-heading">
                <h3>
                  <strong>Orthodontics</strong>
                </h3>
              </div>
              <div className="pricing-content">
                <ul>
                  <li>
                    <i className="ri-check-line"></i>Metal braces
                  </li>
                  <li>
                    <i className="ri-check-line"></i>Ceramic braces
                  </li>
                  <li>
                    <i className="ri-check-line"></i>Invisalign
                  </li>
                  <li>
                    <i className="ri-check-line"></i>Consultation
                  </li>
                  <li>
                    <i className="ri-check-line"></i>Servicing
                  </li>
                </ul>
              </div>
              <div className="pricing-action"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
