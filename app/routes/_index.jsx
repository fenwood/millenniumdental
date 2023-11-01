import HeroBanner from "../components/HeroBanner"
import Card from "../components/Card"
import Testimonials from "../components/Testimonials"
import AboutDrZ from "../components/AboutDrZ"

export const meta = () => {
  return [{ title: "Welcome to Millenium Dental" }]
}

const bannerData = [
  {
    smallText: "Welcome to",
    midText: "Millenium",
    largeText1: "Dental",
    image: "img/molar-logo-tp.png",
    desc: "Maciek Zajac & Associates",
    buttonText: "Book Now",
  },
]

const cardData = [
  {
    _id: 1,
    name: "Same Day Service",
    image: "img/adv_1.png",
    // desc: "A Cool",
    desc: "We welcome same-day, walk in and emergency appointments. Millenium is open evenings and on Saturday, give us a call and we can work around your availability.",
  },
  {
    _id: 2,
    name: "No Hassle",
    image: "img/adv_2.png",
    // desc: "B so so",
    desc: "Our exceptional front office staff will deal with any insurance or admin work. We process most claims on the spot so you don't need to pay up front for treatment.",
  },
  {
    _id: 3,
    name: "Quality Care",
    image: "img/adv_3.png",
    // desc: "C is now",
    desc: "A beautiful healthy smile offers our patients a source of confidence. With this in mind, we aim to provide complete and comfortable dental care for your family.",
  },
  {
    _id: 4,
    name: "Full Service",
    image: "img/adv_4.png",
    desc: "From implants to bridges, invisalign to braces, children to seniors, our clinig has a full range of dental services for you and your entire family.",
  },
]

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div className="container">
        <div className="row-top">
          <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
        </div>

        <div className="products-heading">
          <h2>The Millennium Advantage</h2>
          <p>Check out our many options</p>
        </div>
        <div className="cards">
          {cardData?.map((card) => (
            <Card key={card._id} product={card} />
          ))}
        </div>
        <div className="row-top">
          <div className="cta-box">
            <div className="cta-text">
              <h2>
                Schedule your next appointment with{" "}
                <span>Millennium Dental</span>
              </h2>
            </div>
            <div className="cta-button-container">
              <div className="cta-btn">
                <a href="/contact.html" className="btn btn-color">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row-top">
          <Testimonials />
        </div>

        <div className="row-top">
          <AboutDrZ />
        </div>
      </div>
    </div>
  )
}
