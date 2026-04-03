import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import ProductDetails from "./Pages/ProductDetails";
import Blog from "./Pages/Blog";
import SearchResults from "./Pages/SearchResults";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";
import Shop from "./Pages/Shop";
import Profile from "./Pages/Profile";
import Cart from "./Pages/Cart";
import DemoNotice from "./Pages/DemoNotice";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path= "/demo" element= {<DemoNotice />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/search" element={<SearchResults />} />
        
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;