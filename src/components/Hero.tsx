import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const images = [
  "https://phono-demo.myshopify.com/cdn/shop/files/phono-slider-3.jpg?v=1613704452&width=1780",
  "https://phono-demo.myshopify.com/cdn/shop/files/phono-slider-2.jpg?v=1613704452&width=1780",
  "https://phono-demo.myshopify.com/cdn/shop/files/phono-slider-1.jpg?v=1613704452&width=1780",
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto-change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-20"></div>

      {/* Content */}
      <div className="relative z-30 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">

          {/* Heading from the right */}
          <motion.h1
            key={current} // re-animate on slide change
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Phones & Accessories <br /> Built for Your Lifestyle
          </motion.h1>

          {/* Paragraph from the left */}
          <motion.p
            key={current + "_p"} // re-animate on slide change
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mb-8 max-w-lg"
          >
            Discover premium smartphones, accessories, and storage solutions.
          </motion.p>

          <div className="flex space-x-4">
            <Link to="/shop">
          
            <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition">
              Shop Now
            </button>
            </Link>
            <Link to="/shop">
            <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
              View Collection
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-40">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
