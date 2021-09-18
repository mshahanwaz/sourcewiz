import ProductImagePreview from "./ProductImagePreview";
import ProductImageIcons from "./ProductImageIcons";

function ProductCarousel({ images, currentImage, handleCurrentImage }) {
  return (
    <div className="productCarousel">
      <ProductImagePreview currentImage={currentImage} />
      <ProductImageIcons
        images={images}
        currentImage={currentImage}
        handleCurrentImage={handleCurrentImage}
      />
    </div>
  );
}

export default ProductCarousel;
