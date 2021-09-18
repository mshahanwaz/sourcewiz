import React from "react";
import DeleteButton from "./DeleteButton";
import FileButton from "./FileButton";
import EditButton from "./EditButton";

function ProductDetails({
  id,
  product_name,
  material,
  colors,
  size,
  comments,
}) {
  return (
    <div className="productDetails">
      <div className="productDetails__head">
        <h3>ID {id}</h3>
        <p>{product_name}</p>
      </div>
      <div className="productDetails__body">
        <h4>More Details</h4>
        <p>Description of the product</p>
        <p>Material: {material}</p>
        <p>Colors: {colors.map((color) => color + " ")}</p>
        <p>Size: {size}</p>
        <p>Comments: {comments}</p>
        <FileButton />
      </div>
      <div className="productDetails__actions">
        <DeleteButton />
        <EditButton />
      </div>
    </div>
  );
}

export default ProductDetails;
