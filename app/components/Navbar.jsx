import { Link } from "@remix-run/react"
import { useState } from "react"

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <div id="wrapper">
      <header id="stickyNav">
        <div className="top">
          <div className="container">
            <div className="row">
              <ul className="topmenu">
                <li>
                  &nbsp;<i className="ri-phone-fill icon-header"></i>{" "}
                  <Link to="tel:9054552900">+905 455 2900 </Link>{" "}
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;
                  <i className="ri-mail-fill icon-header"></i>{" "}
                  <Link to="mailto:mzajacdental@gmail.com">
                    mzajacdental@gmail.com{" "}
                  </Link>{" "}
                </li>
                <li className="social-network">
                  <div>20 Polonia Ave #102, Brampton, ON L6Y 0K9</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <nav className="navigation">
          <p className="logo">
            <Link to="/">Millenium Dental</Link>
          </p>
          <div className="navigation-menu">
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded)
            }}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
