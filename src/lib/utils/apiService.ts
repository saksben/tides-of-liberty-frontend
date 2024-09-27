const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Utility function to fetch data
const apiFetch = async (url: string, options = {}) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

// Collections methods
export const fetchCollections = async () => {
  return apiFetch("/collections");
};

export const createCollection = async (data) => {
    return apiFetch('/collections', {
        method: 'POST',
        body: JSON.stringify(data)
    })
}

export const updateCollection = async (collectionSlug, data) => {
    return apiFetch(`/collections/${collectionSlug}`, {
        method: 'PUT',
        body: JSON.stringify(data)
    })
}

export const deleteCollection = async (collectionSlug) => {
    return apiFetch(`/collections/${collectionSlug}`, {
        method: "DELETE"
    })
}

// Products methods
export const fetchProductsByCollection = async (collectionSlug: string | string[]) => {
  return apiFetch(`/collections/${collectionSlug}/products`);
};

export const createProduct = async (collectionSlug, data) => {
    return apiFetch(`/collections/${collectionSlug}/products`, {
        method: 'POST',
        body: JSON.stringify(data)
    })
} 

export const updateProduct = async (collectionSlug, productSlug, data) => {
    return apiFetch(`/collections/${collectionSlug}/products/${productSlug}`, {
        method: 'PUT',
        body: JSON.stringify(data)
    })
}

export const deleteProduct = async (collectionSlug, productSlug) => {
    return apiFetch(`/collections/${collectionSlug}/products/${productSlug}`, {
        method: 'DELETE'
    })
}

// Fetch product details including images
export const fetchProductDetails = async (
  collectionSlug: string | string[],
  productSlug: string | string[]
) => {
  return apiFetch(`/collections/${collectionSlug}/products/${productSlug}`);
};
