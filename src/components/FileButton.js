import React from "react";

function FileButton() {
  return (
    <button className="fileButton">
      <i className="bi bi-file-earmark-text-fill" />
      <span>File name</span>
      <i className="bi bi-cloud-arrow-down-fill" />
    </button>
  );
}

export default FileButton;
