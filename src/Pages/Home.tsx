import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import CategoryCard from "../components/CategoryCard"
import ProductCard from "../components/ProductCard"
import PromoBanner from "../components/PromoBanner"
import WhyChooseUs from "../components/WhyChooseUs"
import Testimonials from "../components/Testimonials"
import BrandLogos from "../components/BrandLogos"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <CategoryCard
            title="Android Phones"
            image="https://media.istockphoto.com/id/1169842299/photo/huawei-p30-lite.jpg?s=612x612&w=0&k=20&c=unTytpRBARy4uunFaiVL7oRCfPuIWPpat5xCed5jPJ8="
          />
          <CategoryCard
            title="Accessories"
            image="https://images.unsplash.com/3/www.madebyvadim.com.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D"
          />
          <CategoryCard
            title="Memory & Storage"
            image="https://media.istockphoto.com/id/2153700281/photo/multiple-storage-devices-pendrive-memory-cards.jpg?s=612x612&w=0&k=20&c=PqmBhTTjE1FPRMyoMMMKGWSbv4oSelZORVynvjnmQCY="
          />
        </div>
      </section>

      <div className="p-3">
        <PromoBanner />
      </div>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-8">Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <ProductCard
            id="1"
            name="Samsung Galaxy S23"
            price={850000}
            image="https://api.samsungmobilepress.com/api/v1/file/579C9AEAEEE2C851E3AA00D5653019EE29062EA2D8CD25041347D7A93F6EAC45D7922F4F9397D9BF7BF6474406BA476935B54EFEBE9BD636963D98FE97D3346B71DF38208A51922F1C2AB66AFFA93E4FA6D6B4A3819B0E3E1B6D3CC9F3E437B57C9CD0916F2C56C7F00B72678ACB6E77AFEEEABDA1458C8AAFAC3076922600CB5F54BEB84884ECED5B8FF846BAB0490ED90473C977DAA60426AB721C73432DDA"
          />

          <ProductCard
            id="2"
            name="Wireless Earbuds"
            price={45000}
            image="https://media.istockphoto.com/id/2237358070/photo/white-modern-wireless-headphones-isolated-on-white-background-copy-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=Regrq4oW7v4aS9Z6n1ueY-vHtqHQndzUbqr6nMkyQGc="
          />

          <ProductCard
            id="3"
            name="Itel 20000 MAH Power Bank"
            price={30000}
            image="https://media.istockphoto.com/id/1976197310/photo/black-power-supply-and-red-shipping-box.webp?a=1&b=1&s=612x612&w=0&k=20&c=2PjZiFlx9_IETRLDu_9tDgHlOSReyaU1FJBeWjbQkrA="
          />

          <ProductCard
            id="4"
            name="SD Card 128GB"
            price={850000}
            image="https://media.istockphoto.com/id/539328902/photo/high-speed-128gb-microsd-flash-memory-cards.webp?a=1&b=1&s=612x612&w=0&k=20&c=b2F8x_42L-0ekWOUgBomUBqmbykEiz8vXnmYbuto_Sk="
          />
        </div>

        <div className="p-5">
          <WhyChooseUs />
        </div>



        <div className="p-3">
          <Testimonials />
        </div>

        <div className="p-3">
          <BrandLogos />
        </div>

        <div className="p-3">
          <Newsletter />
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home