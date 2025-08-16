import React from "react";

export default function Footer() {
  return (
    <footer className="bg-pink-100  text-pink-900 mt-10">
      <div className="w-full mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-2xl font-serif font-bold mb-2 text-pink-700 ml-9">Baisa</h2>
          <p className="mb-4 text-pink-800 ml-9">Luxury meets tradition. Hand-painted, curated, and crafted for you.</p>
          <div className="flex space-x-4 ml-9">
            <a href="#" aria-label="Instagram" className="hover:text-pink-600"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg></a>
            <a href="#" aria-label="Facebook" className="hover:text-pink-600"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5.019 3.676 9.163 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.324 21.163 22 17.019 22 12z"/></svg></a>
            <a href="#" aria-label="Twitter" className="hover:text-pink-600"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37c-.83.5-1.75.87-2.72 1.07A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.15 1.64 4.16c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.83 1.92 3.61-.71-.02-1.38-.22-1.97-.54v.05c0 2.09 1.49 3.83 3.47 4.23-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.12 2.9 3.99 2.93A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.37-.02-.56A8.72 8.72 0 0 0 24 4.59a8.59 8.59 0 0 1-2.54.7z"/></svg></a>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-2 text-pink-700">Shop</h3>
          <ul className="space-y-2">
            <li><a href="/new-arrivals" className="hover:text-pink-600">New Arrivals</a></li>
            <li><a href="/shop" className="hover:text-pink-600">Shop</a></li>
            <li><a href="/celebrity" className="hover:text-pink-600">Celebrity Closet</a></li>
            <li><a href="/ship" className="hover:text-pink-600">Ready to Ship</a></li>
            <li><a href="/velvets" className="hover:text-pink-600">Velvets</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2 text-pink-700">Customer Care</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-600">Contact Us</a></li>
            <li><a href="#" className="hover:text-pink-600">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-pink-600">FAQs</a></li>
            <li><a href="#" className="hover:text-pink-600">Order Tracking</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2 text-pink-700">About</h3>
          <ul className="space-y-2 mb-4">
            <li><a href="#" className="hover:text-pink-600">Our Story</a></li>
            <li><a href="#" className="hover:text-pink-600">Careers</a></li>
            <li><a href="#" className="hover:text-pink-600">Press</a></li>
          </ul>
          <form className="flex flex-col">
            <label htmlFor="newsletter" className="mb-1 text-pink-800">Subscribe to our newsletter</label>
            <div className="flex">
              <input id="newsletter" type="email" placeholder="Your email" className="px-3 py-2 rounded-l-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400" />
              <button type="submit" className="px-4 py-2 bg-pink-700 text-white rounded-r-lg hover:bg-pink-800 transition">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center py-4 text-pink-700 text-sm bg-pink-50">
        &copy; {new Date().getFullYear()} Baisa. All rights reserved.
      </div>
    </footer>
  );
}
