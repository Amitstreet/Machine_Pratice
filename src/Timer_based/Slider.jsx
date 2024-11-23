import React, { useState, useEffect } from 'react';


    const images = [
        {
          src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW5zfGVufDB8fHx8MTY5ODM4NDQ3NQ&ixlib=rb-4.0.3&q=80&w=800',
         
        },
        {
          src: 'https://images.unsplash.com/photo-1514474959185-342affef0cae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8fHwxNjk4Mzg0NDUx&ixlib=rb-4.0.3&q=80&w=800',
         
        },
        {
          src: 'https://images.unsplash.com/photo-1504198458649-3128b932f49b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fHx8MTY5ODM4NDQ1OA&ixlib=rb-4.0.3&q=80&w=800',
         
        },
      ];


const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % length);
    }, 5000); // Change image every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + length) % length);
  };

  const setSlide = index => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      {/* Slide Images */}
      <div className="slides">
        {images.map((image, index) => (
          <div
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            {index === currentIndex && (
              <img src={image.src} alt={image.alt} />
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="arrows">
        <span className="prev" onClick={prevSlide}>
          &#10094;
        </span>
        <span className="next" onClick={nextSlide}>
          &#10095;
        </span>
      </div>

      {/* Manual Navigation Dots */}
      <div className="navigation-manual">
        {images.map((_, index) => (
          <span
            key={index}
            className={`manual-btn ${
              index === currentIndex ? 'active' : ''
            }`}
            onClick={() => setSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
