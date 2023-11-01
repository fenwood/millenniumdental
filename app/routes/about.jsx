import { Outlet } from "@remix-run/react"

function About() {
  return (
    <>
      <Outlet />
      <div className="container">
        <div className="products-heading">
          <h2>About Us</h2>
        </div>
        <div className="about-us-container">
          <div className="about-left">
            <img src="img/blue-chair.jpg" alt="about" />
          </div>
          <div className="about-right">
            <h3>Dentistry For a better life</h3>
            <p>
              Our philosophy of "dentistry for a better life" encompasses our
              approach to all dental procedures. With that in mind, we work to
              provide our patients with the highest quality of care and the most
              comfortable visit possible.
            </p>
            <p>
              Millennium Dentistry is proud to offer a range of dental
              treatments for adults and children, as well as dental implants
              giving patients the smiles they desire and oral health they
              deserve.
            </p>
            <p>
              Our Brampton office is wheelchair accessible and offers ample free
              parking. Give us a call or feel free to request an appointment
              through our website. We look forward to meeting you and your
              family.
            </p>
          </div>
        </div>

        <div className="row-top">
          <div className="products-heading">
            <h2>Meet our team</h2>
          </div>

          <div className="services-container">
            <div className="team-box">
              <a href="#" className="thumbnail">
                <img src="img/drz_500x535.png" alt="Dr Zajac" />
              </a>
              <div className="roles aligncenter">
                <p className="lead">
                  <strong>Dr. Maciek Zajac</strong>
                </p>
                <p>Dentist & Owner, DDS</p>
              </div>
            </div>

            <div className="team-box">
              <a href="#" className="thumbnail">
                <img src="img/drz_500x535.png" alt="Dr Zajac" />
              </a>
              <div className="roles aligncenter">
                <p className="lead">
                  <strong>Dr. Maciek Zajac</strong>
                </p>
                <p>Dentist & Owner, DDS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
