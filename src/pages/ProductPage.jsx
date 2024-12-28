import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import AppShowcase from "../components/AppShowcase";
import Sidebar from "../components/nav";

export default function ProductPage() {
  const { productId } = useParams();
  const product = products.find((p) => p.path === `/products/${productId}`);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Sidebar
        content={
          <AppShowcase
            title={product.name}
            description={product.description}
            productData={product}
          />
        }
      />
    </div>
  );
}
