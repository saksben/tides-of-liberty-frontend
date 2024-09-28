"use client";

import { fetchProductDetails, fetchSingleCollection } from "@/lib/utils/apiService";
import { marked } from "marked";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const ProductPage = () => {
  const params = useParams();
  const collectionSlug = params.collection;
  const productSlug = params.product;

  const [product, setProduct] = React.useState(null);
  const [collectionName, setCollectionName] = React.useState('')
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchProductData = async () => {
      try {
        if (collectionSlug && productSlug) {
          const data = await fetchProductDetails(collectionSlug, productSlug);
          const heading = await fetchSingleCollection(collectionSlug)
          setProduct(data);
          setCollectionName(heading.name)
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

  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  return (
    <div className='p-10 flex flex-col gap-10'>
      <div className="w-full flex">
        {/* Gallery */}
        <div className="w-1/2 border px-8"></div>
        {/* Description */}
        <div className="w-1/2 border px-8">
          {product ? (
            <>
              <h1 className='text-3xl font-bold'>{product.name}</h1>
              <p className='font-bold text-slate-500 text-lg mb-10'>${product.price}</p>
              <div>
                {product.images &&
                  product.images.map((image) => (
                    <img key={image.id} src={image.url} alt={product.name} />
                  ))}
              </div>
              {/* Render markdown as HTML */}
              <div className='markdown'
                dangerouslySetInnerHTML={{ __html: marked(product.description) }}
              ></div>
        
            </>
          ) : (
            <p>{loading && "Loading..."}</p>
          )}
        </div>
      </div>
      <Link href={`/collections/${collectionSlug}`} className='self-center p-2 border border-slate-500 text-sm font-bold uppercase rounded-sm text-slate-500'>&larr; Back to {collectionName}</Link>
    </div>
  );
};

export default ProductPage;
