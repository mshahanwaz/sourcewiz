import { useState } from "react";
import ProductCarousel from "./components/ProductCarousel";
import ProductDetails from "./components/ProductDetails";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/scss/product.scss";
import "./assets/scss/utils.scss";

function ProductCard({ product }) {
  const { id, product_name, material, colors, size, comments, images } =
    product;

  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleCurrentImage = (i) => {
    setCurrentImage(images[i]);
  };

  return (
    <div className="productCard">
      <ProductCarousel
        images={images}
        currentImage={currentImage}
        handleCurrentImage={handleCurrentImage}
      />
      <ProductDetails
        id={id}
        product_name={product_name}
        material={material}
        colors={colors}
        size={size}
        comments={comments}
      />
      <i className="bi bi-x" />
    </div>
  );
}

export default ProductCard;
