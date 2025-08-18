import React from 'react';
import womanImage from '../assets/woman.jpg';
import { Link } from 'react-router-dom';

const Images = () => {
  const categories = [
    {
      id: 1,
      title: "Cocktail",
      image: womanImage,
      gradient: "from-pink-400 via-rose-400 to-red-400",
      description: "Elegant evening wear"
    },
    {
      id: 2,
      title: "Mehendi",
      image: womanImage,
      gradient: "from-yellow-400 via-orange-400 to-red-400",
      description: "Traditional celebration attire"
    },
    {
      id: 3,
      title: "Wedding",
      image: womanImage,
      gradient: "from-purple-400 via-pink-400 to-rose-400",
      description: "Bridal luxury collections"
    },
    {
      id: 4,
      title: "Festive",
      image: womanImage,
      gradient: "from-green-400 via-teal-400 to-blue-400",
      description: "Celebration ready outfits"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-pink-50 py-20">
      <div className="w-full mx-auto px-6 md:px-12">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
            Shop by Occasion
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect outfit for every special moment in your life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className="group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl h-80 md:h-96">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient}`}></div>
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-60 transition-opacity duration-500 h-[400px]"
                  style={{
                    backgroundImage: `url(${category.image})`,
                  }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 font-serif group-hover:scale-105 transition-transform duration-300">
                      {category.title}
                    </h3>
                    <p className="text-lg opacity-90 mb-4">
                      {category.description}
                    </p>
                    <Link to='/shop' className="bg-white/90 hover:bg-white text-gray-800 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                      Explore Collection
                    </Link>
                  </div>
                </div>

                <div className="absolute inset-0 bg-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="800">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-gray-600 mb-8">
            Browse our complete collection or get in touch for custom designs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              View All Collections
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;