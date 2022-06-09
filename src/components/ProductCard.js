const ProductCard = (props) => {
  return (
    <div className="product_card">
      <img src={props.img_url} alt="shop" />
      <h3>{props.product_name}</h3>
      <p>{props.price}</p>
      <button>BUY NOW</button>
    </div>
  );
};

export default ProductCard;
