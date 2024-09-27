"use client"

import { fetchProductDetails } from "@/lib/utils/apiService";
import { useParams } from "next/navigation";
import React from "react";

const ProductPage = () => {
  const params = useParams()
  const collectionSlug = params.collection
  const productSlug = params.product

  const [product, setProduct] = React.useState(null);
  const [error, setError] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    const fetchProductData = async () => {
      try {
        if (collectionSlug && productSlug) {
          const data = await fetchProductDetails(collectionSlug, productSlug)
          setProduct(data)
        }

      } catch (error) {
        console.error('Error fetching product:', (error as Error).message)
        setError((error as Error).message)
      } finally {
        setLoading(false)
      }
    }
    fetchProductData()
  }, [collectionSlug, productSlug]);

  return (
    <div>
      {product ? (
        <>
          <h1>{product.name}</h1>
          <div>
            {product.images && product.images.map((image) => (
              <img key={image.id} src={image.url} alt={product.name} />
            ))}
          </div>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </>
      ) : (
        <p>{loading && "Loading..."}</p>
      )}
    </div>
  );
};

export default ProductPage