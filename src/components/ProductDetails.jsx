import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetails() {
  const product = useParams();

  const [productDetail, setProductDetail] = useState({});

  const url = `https://fakestoreapi.com/products/${product.productId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((item) => setProductDetail(item.data))
      .catch((error) => console.log(error));
  }, []);

  const productTitle = productDetail.title;

  return (
    <div>
      <h1>ProductDetail</h1>
      <p>{productTitle}</p>
    </div>
  );
}
