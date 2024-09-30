"use client";

import { getCart } from "@/lib/utils/cart";
import Link from "next/link";
import React from "react";

const Cart = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getCart();
        setCartItems(data.products || []);
        calculateTotal(data.products || []);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    fetchCart();
  }, []);

  // Calculate the total price of the cart
  const calculateTotal = (items) => {
    const totalAmount = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    setTotal(totalAmount);
  };

  const handleCheckout = async () => {
    const products = cartItems.map((item) => ({
      productId: item.product.id,
      quantity: item.quantity,
    }));
    // Add checkout function to create an order by sending products data to the backend
    alert('Checkout! (check console)')
    console.log("Checkout products:", products);
    console.log("Total amount:", total);
  };

  return (
    <main className="flex flex-col items-center gap-5">
      {cartItems.length === 0 ? (
        <div className="py-[12rem]">
          <h1 className="text-3xl font-bold">Your cart</h1>
          <p className="text-sm tracking-widest text-slate-500">
            Your cart is currently empty.
          </p>
          <Link
            href="/collections"
            className="py-3 px-5 rounded-sm bg-slate-500 text-white uppercase text-sm tracking-widest font-bold"
          >
            Continue Shopping &rarr;
          </Link>
        </div>
      ) : (
        // Display cart items
        <>
          <div className="py-[4rem] px-[3rem] w-full flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">Your cart</h1>
            <Link
              href="/collections"
              className="text-sm underline text-slate-500 font-semibold tracking-widest underline-offset-4"
            >
              Continue shopping
            </Link>
            <table className="w-full mt-[4rem] mb-[3rem]">
              <tr>
                <th className='text-start'>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
              {cartItems.map((item) => (
                <tr key={item.product.id} className="w-full border-t border-b text-center">
                  <td className="py-[3rem]">{item.product.name}</td>
                  <td>${item.product.price}</td>
                  <td>{item.quantity}</td>
                  <td>${item.product.price * item.quantity}</td>
                </tr>
              ))}
            </table>

            <div className="self-end flex flex-col items-end">
              {/* Display total */}
              <div className="flex items-baseline gap-10 mb-2">
                <h2 className="text-lg tracking-wide">Subtotal</h2>
                <p>${total.toFixed(2)}</p>
              </div>
              <p className="text-sm">
                Taxes and{" "}
                <Link
                  href="/policies/shipping-policy"
                  className="underline underline-offset-4"
                >
                  shipping
                </Link>{" "}
                calculated at checkout
              </p>
              {/* Checkout button */}
              <div>
                <button
                  onClick={handleCheckout}
                  className="mt-10 py-2 px-5 bg-slate-500 uppercase font-bold text-sm text-white tracking-widest rounded-sm"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {/* {console.log(cartItems)} */}
    </main>
  );
};

export default Cart;
