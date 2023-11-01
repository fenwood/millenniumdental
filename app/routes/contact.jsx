import { Outlet } from "@remix-run/react"
import { redirect } from "@remix-run/node"
import { useForm, ValidationError } from "@formspree/react"

// export const action = async ({ request }) => {
//   const form = await request.formData()
//   const name = form.get("name")
//   const email = form.get("email")
//   const message = form.get("message")

//   const fields = { name, email, message }

//   console.log(fields)

//   return fields
// }

function Contact() {
  const [state, handleSubmit] = useForm("xaygknjq")
  if (state.succeeded) {
    console.log("state ", state)
    return <p>Thank you for reaching out. We will be in contact soon.</p>
  }
  return (
    <>
      <Outlet />
      <div className="container">
        <div className="products-heading">
          <h2>Get in touch</h2>
        </div>
        <div className="row-top">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11549.079131991375!2d-79.761454!3d43.6425551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa90ecdec2bdb3886!2sDr.+Maciek+Zajac+Millennium+Dental!5e0!3m2!1sen!2sca!4v1547328510035"
            width="100%"
            height="380"
            frameBorder="0"
            style={{ border: 0 }}
            allowfullscreen
          ></iframe>
        </div>
        <div className="row-top">
          <div className="products-heading">
            <h2>Contact us online</h2>
          </div>
        </div>

        <div className="contact-container">
          <div className="contact-left">
            <form action="https://formspree.io/f/xaygknjq" method="POST">
              <div className="form-control">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="form-control">
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" required />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="form-control">
                <label htmlFor="message">Name</label>
                <textarea name="message" id="message" required />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button className="btn" type="submit" disabled={state.submitting}>
                Contact Us
              </button>
            </form>
          </div>
          <div className="contact-right">
            <ul className="contact-info">
              <li>
                <label htmlFor="address">Address :</label>
                <p>20 Polonia Ave #102, Brampton, ON</p>
              </li>
              <li>
                <label htmlFor="phone">Phone :</label>
                <p>+1 905 455 2900</p>
              </li>
              <li>
                <label htmlFor="email">Email :</label>
                <p>mzajacdental@gmail.com</p>
              </li>
              <li>
                <label htmlFor="hours">Hours :</label>
                <p>Mon: 10:00-18:30</p>
                <p>Tue: 10:00-16:30</p>
                <p>Wed: 10:00-18:30</p>
                <p>Thu: 10:00-16:30</p>
                <p>Fri: 10:00-18:30</p>
                <p>Sat: 09:00-14:30</p>
                <p>Sun: Closed</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
