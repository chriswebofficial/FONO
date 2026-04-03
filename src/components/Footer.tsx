import { motion } from "framer-motion";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* COMPANY INFO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-2xl font-bold mb-4">FONO</h2>
          <p className="text-gray-400 text-sm">
            Premium mobile devices, accessories, and tech solutions. Fast delivery and reliable support.
          </p>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">Collection</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </motion.div>

        {/* CUSTOMER SUPPORT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Shipping</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">Payment Options</li>
          </ul>
        </motion.div>

        {/* SOCIAL & NEWSLETTER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <FiFacebook size={20} className="hover:text-white cursor-pointer" />
            <FiInstagram size={20} className="hover:text-white cursor-pointer" />
            <FiTwitter size={20} className="hover:text-white cursor-pointer" />
            <FiYoutube size={20} className="hover:text-white cursor-pointer" />
          </div>

          <p className="text-sm mb-2">Subscribe for updates:</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 rounded-md text-black outline-none text-sm"
            />
            <button className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-500 transition text-white text-sm">
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} FONO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
