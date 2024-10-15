import React, { useState } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "pic5.webp",
    "pic6.jpg",
    "pic4.jpg",
    "pic3.jpg",
  "pic7.jpg","pic8.jpg",
  "pic1.webp",
  "pic2.jpg",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ 
          transform: `translateX(-${currentSlide * 100}%)`,
          height: '80vh', // Adjust this value to change the height
          minHeight: '300px', // Minimum height for very small screens
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-4xl  bg-opacity-50 text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-4xl bg-opacity-50 text-white p-2 rounded-full"
      >
        &gt;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
