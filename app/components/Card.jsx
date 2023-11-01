import { Link } from "@remix-run/react"

const Product = ({ product: { image, name, slug, desc } }) => {
  return (
    <div>
      {/* <Link href={`/product/${slug}`}>
        <div className="product-card">
          <img src={image} width={250} height={250} className="product-image" />
          <p className="product-price">{name}</p>
          <p className="product-name">{desc}</p>
        </div>
      </Link> */}
      <article className="card">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <div className="">{desc}</div>
      </article>
    </div>
  )
}

export default Product
