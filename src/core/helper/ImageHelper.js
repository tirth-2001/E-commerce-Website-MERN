import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  var imgurl = product
    ? `${API}/product/photo/${product._id}`
    : "https://images.unsplash.com/photo-1488371934083-edb7857977df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80";
  return (
    <img
      src={imgurl}
      alt="photo"
      style={{ maxHeight: "100%", maxWidth: "100%" }}
      className="mb-3 rounded"
    />
  );
};

export default ImageHelper;
