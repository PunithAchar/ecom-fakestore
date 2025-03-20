'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cart = useSelector((state: RootState) => state.cart);
  // const cartItemCount = cart.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-[#2874f0] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Flipkart</span>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-full py-2 px-4 rounded-sm text-black focus:outline-none"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/cart" className="flex items-center space-x-1">
              <ShoppingCart className="h-6 w-6" />
              {cart?.items?.length > 0 && (
                <span className="bg-yellow-400 text-black rounded-full px-2 py-1 text-xs">
                  {cart?.items?.length}
                </span>
              )}
            </Link>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>

            {/* <div className="hidden md:flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">Login</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>New customer? Sign up</DropdownMenuItem>
                  <DropdownMenuItem>My Profile</DropdownMenuItem>
                  <DropdownMenuItem>Orders</DropdownMenuItem>
                  <DropdownMenuItem>Wishlist</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div> */}
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full py-2 px-4 rounded-sm text-black focus:outline-none"
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
    </header>
  );
}