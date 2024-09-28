"use client";

import {
  createProduct,
  deleteProduct,
  fetchProductsByCollection,
  updateProduct,
} from "@/lib/utils/apiService";
import { useParams } from "next/navigation";
import React from "react";

const ProductsPage = () => {
  const params = useParams();
  const collectionSlug = params.collectionSlug;
  const [products, setProducts] = React.useState([]);
  const [newProductName, setNewProductName] = React.useState("");
  const [editProductSlug, setEditProductSlug] = React.useState("");
  const [editProductName, setEditProductName] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProductsByCollection(collectionSlug);
        setProducts(data);
      } catch (error) {
        setError("Failed to load products");
      }
    };
    loadProducts();
  }, [collectionSlug]);

  const handleAddProduct = async () => {
    try {
      await createProduct(collectionSlug, { name: newProductName });
      setNewProductName("");
      // Reload products
      const updatedProducts = await fetchProductsByCollection(collectionSlug);
      setProducts(updatedProducts);
    } catch (error) {
      setError("Failed to add product");
    }
  };

  const handleDeleteProduct = async (productSlug: string) => {
    try {
      await deleteProduct(collectionSlug, productSlug);
      // Reload products
      const updatedProducts = await fetchProductsByCollection(collectionSlug);
      setProducts(updatedProducts);
    } catch (error) {
      setError("Failed to delete product.");
    }
  };

  const handleEditProduct = (product) => {
    setEditProductSlug(product.slug);
    setEditProductName(product.name);
  };

  const handleUpdateProduct = async () => {
    if (editProductSlug) {
      try {
        await updateProduct(collectionSlug, editProductSlug, {
          name: editProductName,
        });
        setEditProductSlug("");
        setEditProductName("");
        const updatedProducts = await fetchProductsByCollection(collectionSlug);
        setProducts(updatedProducts);
      } catch (error) {
        setError("Failed to update product");
      }
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-xl text-center'>Manage Products</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className='flex gap-3'>
        <input
          type="text"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
          placeholder="New product name"
          className='border'
        />
        <button onClick={handleAddProduct} className='bg-green-700 text-white p-2 rounded'>Add Product</button>
      </div>
      <ul className='flex flex-col gap-2'>
        {products.map((product) => (
          <li key={product.slug}>
            {editProductSlug === product.slug ? (
              <div className='flex gap-3'>
                <input
                  type="text"
                  value={editProductName}
                  onChange={(e) => setEditProductName(e.target.value)}
                  className='border'
                />
                <div className='flex gap-2'>
                  <button onClick={handleUpdateProduct} className='bg-slate-500 text-white rounded p-2'>Update</button>
                  <button onClick={() => setEditProductSlug("")} className='bg-red-500 text-white rounded p-2'>Cancel</button>
                </div>
              </div>
            ) : (
              <div className='flex gap-3 items-center'>
                {product.name}{" "}
                <div className='flex gap-2'>
                  <button onClick={() => handleEditProduct(product)} className='bg-slate-500 rounded p-2 text-white'>Edit</button>
                  <button onClick={() => handleDeleteProduct(product.slug)} className='bg-red-500 rounded p-2 text-white'>
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
