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
    <div>
      <h2>Manage Products</h2>
      {error && <p>{error}</p>}
      <input
        type="text"
        value={newProductName}
        onChange={(e) => setNewProductName(e.target.value)}
        placeholder="New product name"
      />
      <button onClick={handleAddProduct}>Add Product</button>
      <ul>
        {products.map((product) => (
          <li key={product.slug}>
            {editProductSlug === product.slug ? (
              <>
                <input
                  type="text"
                  value={editProductName}
                  onChange={(e) => setEditProductName(e.target.value)}
                />
                <button onClick={handleUpdateProduct}>Update</button>
                <button onClick={() => setEditProductSlug("")}>Cancel</button>
              </>
            ) : (
              <>
                {product.name}{" "}
                <button onClick={() => handleEditProduct(product)}>Edit</button>
                <button onClick={() => handleDeleteProduct(product.slug)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
