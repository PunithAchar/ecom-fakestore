"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "@/store/reducers/cartSlice";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Minus, Plus, Trash2 } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state: RootState) => state.cart);
  // const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add items to your cart to shop</p>
          <Link
            href="/"
            className="inline-flex items-center text-white bg-black rounded-md px-4 py-2 cursor-pointer"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Shopping Cart</h2>
              <Button
                variant="destructive"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </Button>
            </div>
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between  space-x-4 py-4 border-b "
                >
                  <div className="flex flex-col md:flex-row">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-contain"
                    />
                    <div className="flex-grow">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-lg font-bold mt-2">₹{item.price}/-</p>
                      <p className="text-sm font-normal mt-2">₹{item.price} * {item.quantity} = ₹{(item.price)*(item.quantity)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: Math.max(1, item.quantity - 1),
                          })
                        )
                      }
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div className="w-full lg:w-80">
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <Button className="w-full mt-6">Proceed to Checkout</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
