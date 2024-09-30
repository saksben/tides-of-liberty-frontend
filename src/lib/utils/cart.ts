const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Add a product to the cart
export const addToCart = async (productId, quantity) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("User is not authenticated");

    const response = await fetch(`${BASE_URL}/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Include the JWT token for authentication
      },
      body: JSON.stringify({ productId, quantity }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({})); // Safely handle empty responses
      throw new Error(error.message || "Failed to add item to cart");
    }

    return response.json().catch(() => ({})); // Safely handle empty responses
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

// Get the user's cart
export const getCart = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("User is not authenticated");

    const response = await fetch(`${BASE_URL}/cart`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const error = await response.json().catch(() => ({})); // Safely handle empty responses
      throw new Error(error.message || "Failed to fetch cart");
    }
    return response.json().catch(() => ({})); // Safely handle empty responses
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};
