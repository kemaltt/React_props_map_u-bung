import ProductCard from "./ProductCard";

let products = [
  {
    id: 1,
    product_name: "cocooil",
    price: "30€",
    img_url:
      "https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg",
  },
  {
    id: 2,
    product_name: "Polaroid",
    price: "60€",
    img_url:
      "https://www.haus.de/sites/default/files/styles/textbreite_2_spalten_tablet_klein/public/gutewahl/2020-03/Sofortbildkamera_Polaroid%20OneStep%2B-3.jpg?itok=QA7wdMps",
  },
  {
    id: 3,
    product_name: "Cel",
    price: "20€",
    img_url:
      "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

const Product = () => {
  return (
    <div className="product_container">
      <h5>Reactjs Lev2_1</h5>
      <h1>Super Shop</h1>
      <div className="product">
        {products.map((el, i) => (
          <ProductCard
            key={i}
            product_name={el.product_name}
            price={el.price}
            img_url={el.img_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
