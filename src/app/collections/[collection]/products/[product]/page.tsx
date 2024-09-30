"use client";

import {
  fetchProductDetails,
  fetchSingleCollection,
} from "@/lib/utils/apiService";
import { addToCart } from "@/lib/utils/cart";
import { marked } from "marked";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const ProductPage = () => {
  const params = useParams();
  const collectionSlug = params.collection;
  const productSlug = params.product;

  const [product, setProduct] = React.useState(null);
  const [collectionName, setCollectionName] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  const [quantity, setQuantity] = React.useState(1);
  const [cartLoading, setCartLoading] = React.useState(false);
  const [cartError, setCartError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchProductData = async () => {
      try {
        if (collectionSlug && productSlug) {
          const data = await fetchProductDetails(collectionSlug, productSlug);
          const heading = await fetchSingleCollection(collectionSlug);
          setProduct(data);
          setCollectionName(heading.name);
        }
      } catch (error) {
        console.error("Error fetching product:", (error as Error).message);
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchProductData();
  }, [collectionSlug, productSlug]);

  // Handle adding product to cart
  const handleAddToCart = async () => {
    setCartLoading(true);
    setCartError(null);
    try {
      if (product) {
        await addToCart(product.id, quantity);
        alert("Product added to cart!");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      setCartError("Failed to add product to cart. Please try again");
    } finally {
      setCartLoading(false);
    }
  };

  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  return (
    <div className="p-10 flex flex-col gap-10">
      <div className="w-full flex">
        {/* Gallery */}
        <div className="w-1/2 border px-8"></div>
        {/* Description */}
        <div className="w-1/2 px-8">
          {product ? (
            <>
              <h1 className="text-4xl font-bold">{product.name}</h1>
              <p className="font-bold text-slate-500 text-lg mb-10">
                ${product.price}
              </p>

              {/* Quantity selector */}
              <div className="flex items-center gap-2 mt-4">
                <label htmlFor="quantity" className="text-sm">
                  Quantity
                </label>
                <input
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  min="1"
                  className="w-16 p-2 border border-slate-500 rounded"
                />
              </div>

              {/* Add to Cart button */}
              <button
                onClick={handleAddToCart}
                className={`p-3 w-full mt-4 mb-[4rem] rounded-sm border border-slate-500 uppercase text-slate-500 text-sm font-bold ${
                  cartLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={cartLoading}
              >
                {" "}
                {cartLoading ? "Adding..." : "Add to Cart"}{" "}
              </button>

              {/* Cart error message */}
              {cartError && <p className="text-red-500 mt-2">{cartError}</p>}
              <div>
                {product.images &&
                  product.images.map((image) => (
                    <img key={image.id} src={image.url} alt={product.name} />
                  ))}
              </div>
              {/* Render markdown as HTML */}
              <div
                className="markdown"
                dangerouslySetInnerHTML={{
                  __html: marked(product.description),
                }}
              ></div>
            </>
          ) : (
            <p>{loading && "Loading..."}</p>
          )}
        </div>
      </div>
      <Link
        href={`/collections/${collectionSlug}`}
        className="self-center p-2 border border-slate-500 text-sm font-bold uppercase rounded-sm text-slate-500"
      >
        &larr; Back to {collectionName}
      </Link>
    </div>
  );
};

export default ProductPage;
