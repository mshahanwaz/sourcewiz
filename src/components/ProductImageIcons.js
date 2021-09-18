import React from "react";

function ProductImageIcons({ images, currentImage, handleCurrentImage }) {
  return (
    <div className="productImageIcons">
      {images.map((image, i) => (
        <img
          src={image}
          alt="icon"
          key={i}
          onClick={() => handleCurrentImage(i)}
          className={image === currentImage ? "current" : ""}
        />
      ))}
    </div>
  );
}

export default ProductImageIcons;
