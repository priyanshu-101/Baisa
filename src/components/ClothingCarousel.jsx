import React, { useState, useEffect } from 'react';

const ClothingCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const ethnicWear = [
    {
      id: 1,
      gradient: "bg-gradient-to-br from-pink-400 via-rose-400 to-red-400",
      title: "Elegant Saree Collection",
      description: "Traditional silk sarees with modern designs",
      pattern: "🌸"
    },
    {
      id: 2,
      gradient: "bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400",
      title: "Designer Lehenga",
      description: "Exquisite bridal and party wear lehengas",
      pattern: "✨"
    },
    {
      id: 3,
      gradient: "bg-gradient-to-br from-rose-400 via-pink-400 to-orange-400",
      title: "Anarkali Suits",
      description: "Graceful anarkali suits for every occasion",
      pattern: "🌺"
    },
    {
      id: 4,
      gradient: "bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400",
      title: "Kurti Collection",
      description: "Contemporary kurtis with ethnic charm",
      pattern: "🌷"
    },
    {
      id: 5,
      gradient: "bg-gradient-to-br from-green-400 via-teal-400 to-blue-400",
      title: "Sharara Sets",
      description: "Stylish sharara sets for festive occasions",
      pattern: "🪷"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ethnicWear.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [ethnicWear.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + ethnicWear.length) % ethnicWear.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % ethnicWear.length);
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden bg-gradient-to-r from-pink-50 to-rose-50">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {ethnicWear.map((item) => (
          <div key={item.id} className={`w-full flex-shrink-0 relative ${item.gradient}`}>
            <div className="absolute inset-0 opacity-10">
              <div className="text-9xl md:text-[12rem] flex items-center justify-center h-full">
                {item.pattern}
              </div>
            </div>
            
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center text-white px-4 max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif drop-shadow-lg">
                  {item.title}
                </h2>
                <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
                  {item.description}
                </p>
                <button className="bg-white bg-opacity-90 hover:bg-opacity-100 text-pink-600 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-pink-600 p-3 rounded-full transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-pink-600 p-3 rounded-full transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {ethnicWear.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClothingCarousel;