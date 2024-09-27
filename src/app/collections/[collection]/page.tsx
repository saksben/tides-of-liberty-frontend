"use client";

import { fetchProductsByCollection } from "@/lib/utils/apiService";
import { useParams } from "next/navigation";
import React from "react";

// Create a type interface for the Product and set the products useState type as Product[] to get rid of the error below

const CollectionPage = () => {
  const params = useParams(); // Dynamic collection slug, ex. 't-shirts', 'mens', etc
  const collectionSlug = params.collection;

  const [products, setProducts] = React.useState([]);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchProductsData = async () => {
      try {
        if (!collectionSlug) return;

        const data = await fetchProductsByCollection(collectionSlug);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", (error as Error).message);
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsData();
  }, [collectionSlug]);

  return (
    <>
      <div>
        <h1>{collectionSlug}</h1>
        <ul>
          {products.map((product) => (
            <li key={product.slug}>
              <a
                href={`/collections/${collectionSlug}/products/${product.slug}`}
              >
                {product.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CollectionPage;
