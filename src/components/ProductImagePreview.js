import React from "react";

function ProductImagePreview({ currentImage }) {
  return (
    <div className="productImagePreview">
      <img src={currentImage} alt="preview" />
    </div>
  );
}

export default ProductImagePreview;
