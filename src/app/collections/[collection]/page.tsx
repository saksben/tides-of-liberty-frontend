"use client";

import {
  fetchCollections,
  fetchProductsByCollection,
  fetchSingleCollection,
} from "@/lib/utils/apiService";
import { useParams } from "next/navigation";
import React from "react";

// Create a type interface for the Product and set the products useState type as Product[] to get rid of the error below

const CollectionPage = () => {
  const params = useParams(); // Dynamic collection slug, ex. 't-shirts', 'mens', etc
  const collectionSlug = params.collection;

  const [products, setProducts] = React.useState([]);
  const [collectionName, setCollectionName] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchProductsData = async () => {
      try {
        if (!collectionSlug) return;

        const data = await fetchProductsByCollection(collectionSlug);
        const heading = await fetchSingleCollection(collectionSlug);
        setProducts(data);
        setCollectionName(heading.name);
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
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-10">{collectionName}</h1>
      <ul className="gap-8 grid grid-cols-5 max-w-[70rem]">
        {products.map((product) => (
          <li key={product.slug} className="border list-none">
            <a href={`/collections/${collectionSlug}/products/${product.slug}`}>
              <div className="h-[6rem] w-full border mb-3"></div>
              <p className="font-bold text-lg">{product.name}</p>
              <p className="font-bold text-sm text-slate-500">
                ${product.price}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionPage;
