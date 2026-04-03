// src/components/BrandLogos.tsx
import { motion } from "framer-motion";

const brands = [
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    name: "Xiaomi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg",
  },
  {
    name: "JBL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/JBL_logo.svg",
  },
  {
    name: "Anker",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Anker_logo.svg",
  },
];

const BrandLogos = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 font-medium mb-10"
        >
          Trusted by Top Brands
        </motion.h3>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center grayscale hover:grayscale-0 transition"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 md:h-12 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
