import { Link } from "@remix-run/react"

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <h3>
          <img src="img/molar-img-35x35.png" alt="Logo" />
          Millenium
        </h3>
      </div>
      <div>
        <p>2020 Polonia Ave #102, Brampton, ON L6Y 0K9</p>
      </div>
      <div>
        <i className="ri-phone-fill icon-header"></i>{" "}
        <Link to="tel:9054552900">905 455 2900 </Link>{" "}
      </div>
    </div>
  )
}

export default Footer
