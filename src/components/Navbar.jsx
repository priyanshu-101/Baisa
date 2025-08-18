import React, { useState } from "react";
import { Link } from "react-router-dom";
import WomenImage from "../assets/woman.jpg"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [shopHover, setShopHover] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);

    const handleShopMouseEnter = () => {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
            setHoverTimeout(null);
        }
        setShopHover(true);
    };

    const handleShopMouseLeave = () => {
        const timeout = setTimeout(() => {
            setShopHover(false);
        }, 100);
        setHoverTimeout(timeout);
    };

    const categories = [
        "Dresses", "Kurtas", "Kaftans", "Bottoms", "Sarees",
        "Lehengas", "Anarkali Sets", "Co-ords", "Jackets",
        "Dupattas", "Sharara Sets"
    ];

    const collections = [
        { name: "Retroraani", isNew: true },
        { name: "Safar", isNew: true },
        { name: "Sakhi II", isNew: false },
        { name: "Reejh", isNew: false },
        { name: "Sakhi", isNew: false },
        { name: "Khel", isNew: false },
        { name: "Nadira", isNew: false },
        { name: "Gul Summer Edit", isNew: false },
        { name: "Gul", isNew: false },
        { name: "Fariba", isNew: false },
        { name: "Dream A Little", isNew: false },

    ];

    return (
        <nav className="w-full bg-pink-100 border-b border-pink-300 shadow-sm relative z-[50]">
            <div className="w-full mx-auto px-4 flex items-center justify-between h-16">
                <Link to="/" className="text-2xl font-serif font-bold text-pink-700 cursor-pointer ml-9">Baisa</Link>

                <div className="hidden md:flex flex-1 justify-center">
                    <div className="flex space-x-6">
                        <Link to="/new-arrivals" className="text-pink-700 hover:text-pink-900 font-medium">New Arrivals</Link>

                        <div
                            className="relative z-[9999]"
                            onMouseEnter={handleShopMouseEnter}
                            onMouseLeave={handleShopMouseLeave}
                        >
                            <Link to="/shop" className="text-pink-700 hover:text-pink-900 font-medium">Shop</Link>

                            {shopHover && (
                                <div
                                    className="fixed top-16 left-0 right-0 bg-pink-100 shadow-xl z-[9999] border-b border-pink-100 w-full"
                                    onMouseEnter={handleShopMouseEnter}
                                    onMouseLeave={handleShopMouseLeave}
                                >
                                    <div className="w-full px-8 py-8">
                                        <div className="flex">
                                            <div className="w-1/4 p-6 border-r border-pink-100">
                                                <h3 className="text-lg font-semibold text-pink-800 mb-4 uppercase tracking-wide">BY CATEGORY</h3>
                                                <div className="space-y-3">
                                                    {categories.map((category, index) => (
                                                        <Link
                                                            key={index}
                                                            to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                                                            className="block text-gray-600 hover:text-pink-700 transition-colors duration-200"
                                                            onClick={() => setShopHover(false)}
                                                        >
                                                            {category}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="w-1/4 p-6 border-r border-pink-100">
                                                <h3 className="text-lg font-semibold text-pink-800 mb-4 uppercase tracking-wide">BY COLLECTION</h3>
                                                <div className="space-y-3">
                                                    {collections.map((collection, index) => (
                                                        <Link
                                                            key={index}
                                                            to={`/collection/${collection.name.toLowerCase().replace(/\s+/g, '-')}`}
                                                            className="flex items-center text-gray-600 hover:text-pink-700 transition-colors duration-200"
                                                            onClick={() => setShopHover(false)}
                                                        >
                                                            {collection.name}
                                                            {collection.isNew && (
                                                                <span className="ml-2 px-2 py-1 text-xs font-bold text-yellow-600 bg-yellow-100 rounded uppercase">NEW</span>
                                                            )}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="w-1/2 p-6">
                                                <div className="grid grid-cols-2 gap-4 h-full">
                                                    <div className="relative overflow-hidden rounded-lg group cursor-pointer">
                                                        <img
                                                            src={WomenImage}
                                                            alt="Featured Product"
                                                            className="w-full transition-transform duration-300 transform group-hover:scale-105"
                                                        />
                                                    </div>

                                                    <div className="relative overflow-hidden rounded-lg group cursor-pointer">
                                                        <img
                                                            src={WomenImage}
                                                            alt="Featured Product"
                                                            className="w-full transition-transform duration-300 transform group-hover:scale-105"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link to="/celebrity" className="text-pink-700 hover:text-pink-900 font-medium">Celebrity Closet</Link>
                        <Link to="/ship" className="text-pink-700 hover:text-pink-900 font-medium">Ready to ship</Link>
                        <Link to="/velvets" className="text-pink-700 hover:text-pink-900 font-medium">Velvets</Link>
                    </div>
                </div>

                <div className="flex items-center space-x-4 mr-9">
                    <button className="text-pink-700 hover:text-pink-900" aria-label="Search">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <circle cx="11" cy="11" r="7" strokeWidth="2" stroke="currentColor" fill="none" />
                            <line x1="16" y1="16" x2="21" y2="21" strokeWidth="2" stroke="currentColor" />
                        </svg>
                    </button>

                    <Link to="/wishlist" className="text-pink-700 hover:text-pink-900" aria-label="Wishlist">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                        </svg>
                    </Link>

                    <Link to="/cart" className="text-pink-700 hover:text-pink-900" aria-label="Cart">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                        </svg>
                    </Link>

                    <div className="relative">
                        <button
                            className="text-pink-700 hover:text-pink-900 focus:outline-none"
                            aria-label="Profile"
                            onClick={() => setProfileOpen((open) => !open)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                <circle cx="12" cy="8" r="4" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 20c0-2.21 3.58-4 6-4s6 1.79 6 4" />
                            </svg>
                        </button>
                        {profileOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-white border border-pink-200 rounded-lg shadow-lg z-10">
                                <Link to="/login" className="block px-4 py-2 text-pink-700 hover:bg-pink-50" onClick={() => setProfileOpen(false)}>Login</Link>
                                <Link to="/register" className="block px-4 py-2 text-pink-700 hover:bg-pink-50" onClick={() => setProfileOpen(false)}>Register</Link>
                            </div>
                        )}
                    </div>
                </div>

                <button
                    className="md:hidden flex items-center text-pink-700 focus:outline-none ml-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden px-4 pb-4 border border-pink-200 bg-pink-100 relative z-50">
                    <div className="flex flex-col space-y-2">
                        <Link to="/new-arrivals" className="text-pink-700 hover:text-pink-900 font-medium" onClick={() => setMenuOpen(false)}>New Arrivals</Link>
                        <Link to="/shop" className="text-pink-700 hover:text-pink-900 font-medium" onClick={() => setMenuOpen(false)}>Shop</Link>
                        <Link to="/celebrity" className="text-pink-700 hover:text-pink-900 font-medium" onClick={() => setMenuOpen(false)}>Celebrity Closet</Link>
                        <Link to="/ship" className="text-pink-700 hover:text-pink-900 font-medium" onClick={() => setMenuOpen(false)}>Ready to ship</Link>
                        <Link to="/velvets" className="text-pink-700 hover:text-pink-900 font-medium" onClick={() => setMenuOpen(false)}>Velvets</Link>

                        {profileOpen && (
                            <div className="w-40 bg-white border border-pink-200 rounded-lg shadow-lg z-10 mx-auto">
                                <Link to="/login" className="block px-4 py-2 text-pink-700 hover:bg-pink-50" onClick={() => { setProfileOpen(false); setMenuOpen(false); }}>Login</Link>
                                <Link to="/register" className="block px-4 py-2 text-pink-700 hover:bg-pink-50" onClick={() => { setProfileOpen(false); setMenuOpen(false); }}>Register</Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}