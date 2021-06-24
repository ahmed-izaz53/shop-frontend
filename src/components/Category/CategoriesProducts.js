import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../assets/css/categoryCss/categoryProducts.css";


export default function CategoriesProducts() {
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const { category_id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/category/get-category/${category_id}`)
      .then((dataPackets) => {
        setCategory(dataPackets.data.category);
        setProducts(dataPackets.data.products);
      })
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <div>
      <div id="category-description">
        <h3>{category.product_category_name}</h3>
        <p>{category.description}</p>
      </div>

      <div id="categories-products">
        {products.map((product, index) => {
          const product_link = `/products/product/${product.id}`
          return (
            <Link to={product_link}>
              <div className="categories-product">
                <h5>{product.product_name}</h5>
                <p>{product.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
