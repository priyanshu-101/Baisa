import React, {useEffect} from 'react';
import ClothingCarousel from '../components/ClothingCarousel';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    // Product data array
    const newProducts = [
        {
            id: 1,
            name: "Safar Beige Flower Printed Kaftan Kurta Set",
            price: "₹16,800",
            gradient: "from-green-100 to-teal-100",
            overlayGradient: "from-green-200 via-teal-200 to-blue-200",
            icon: "👘",
            description: "Beige Flower Printed"
        },
        {
            id: 2,
            name: "Safar Flower Embroidered Linen Kaftan Kurta Set",
            price: "₹18,800",
            gradient: "from-yellow-100 to-orange-100",
            overlayGradient: "from-yellow-200 via-orange-200 to-pink-200",
            icon: "🌸",
            description: "Embroidered Linen"
        },
        {
            id: 3,
            name: "Safar B&W Bell Sleeve Cutwork Printed Kurta Set",
            price: "₹21,800",
            gradient: "from-blue-100 to-indigo-100",
            overlayGradient: "from-blue-200 via-indigo-200 to-purple-200",
            icon: "✂️",
            description: "Bell Sleeve Cutwork"
        },
        {
            id: 4,
            name: "Safar Shimmer Foil Kurta Set",
            price: "From ₹22,800",
            gradient: "from-pink-100 to-rose-100",
            overlayGradient: "from-pink-200 via-rose-200 to-red-200",
            icon: "✨",
            description: "Shimmer Foil"
        }
    ];

      useEffect(() => {
        AOS.init({
          duration: 800,
          once: false,
          offset: 100,
          easing: 'ease-in-out',
        });
      }, []);

    return (
        <div className="w-full bg-gradient-to-b from-pink-50 to-white min-h-screen" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
            <ClothingCarousel />
            <div className="w-full mx-auto px-6 md:px-12 py-16">
                <div className="text-center space-y-8">

                    <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        A love letter to sunlit days, this summer collection blends comfort, color, and quiet luxury.
                    </p>
                    
                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-pink-100">
                        <p className="text-pink-600 text-lg md:text-xl leading-relaxed font-medium">
                            Think breezy co-ords, soft linens, and relaxed fits; brought to life with bold botanicals, 
                            nostalgic prints, and hand-finished details in a palette of coral skies, turmeric sun, 
                            and garden greens.
                        </p>
                    </div>
                    
                    <div className="pt-8">
                        <Link to="/shop" className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                            Explore Collection
                        </Link>
                    </div>
                </div>
                
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6">
                        <div className="text-4xl mb-4">🌸</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Handcrafted Details</h3>
                        <p className="text-gray-600">Every piece features intricate hand-finished details that showcase traditional craftsmanship</p>
                    </div>
                    
                    <div className="text-center p-6">
                        <div className="text-4xl mb-4">🌿</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Natural Fabrics</h3>
                        <p className="text-gray-600">Soft linens and breathable cottons perfect for the warmth of summer days</p>
                    </div>
                    
                    <div className="text-center p-6">
                        <div className="text-4xl mb-4">🎨</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Vibrant Prints</h3>
                        <p className="text-gray-600">Bold botanicals and nostalgic patterns inspired by nature's beauty</p>
                    </div>
                </div>
            </div>

            <div className="w-full bg-gradient-to-b from-white to-pink-50 py-16">
                <div className="w-full px-6 md:px-12">
                    <div className="flex items-center justify-between mb-8 max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">New In Store</h2>
                        <div className="flex space-x-2">
                            <button className="p-2 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-600 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button className="p-2 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-600 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {newProducts.map((product) => (
                            <div key={product.id} className="group cursor-pointer">
                                <div className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${product.gradient} aspect-[3/4] mb-4`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${product.overlayGradient} opacity-80`}></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <div className="text-6xl mb-4">{product.icon}</div>
                                            <p className="text-lg font-medium">{product.description}</p>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </div>
                                <h3 className="text-lg font-medium text-gray-800 mb-2">{product.name}</h3>
                                <p className="text-pink-600 font-semibold text-lg">{product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
