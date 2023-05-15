import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const url = "https://fakestoreapi.com/products";

export default function Products() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((item) => setProductList(item.data))
      .catch((error) => console.log(error));
  }, []);

  const mappedProductList = productList.map((item) => (
    <div key={item.id}>
      <h1>{item.title}</h1>
      <p>{item.price}</p>
      <Link to={`/products/${item.id}`}>
        <button>go to detail</button>
      </Link>
    </div>
  ));
  return (
    <div>
      <h1>FetchData</h1>
      {mappedProductList}
    </div>
  );
}
