import { useParams } from "react-router-dom";
import { products } from "../data/Product";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";


const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  const discountedPrice =
    product.discount
      ? product.price - (product.price * product.discount) / 100
      : product.price;

  return (
    <div>
    <div className="p-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mt-24">
      
      {/* Image */}
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[400px] object-contain"
        />
      </div>

      {/* Info */}
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

        <p className="text-gray-600 mb-4">{product.description}</p>

        <div className="mb-4">
          {product.discount ? (
            <>
              <span className="text-red-600 text-2xl font-bold mr-3">
                ${discountedPrice}
              </span>
              <span className="line-through text-gray-400">
                ${product.price}
              </span>
            </>
          ) : (
            <span className="text-red-600 text-2xl font-bold">
              ${product.price}
            </span>
          )}
        </div>

        {!product.inStock && (
          <p className="text-red-500 font-semibold mb-4">
            Out of Stock
          </p>
        )}

        <div className="flex gap-4 mt-6">
          <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
            Add to Cart
          </button>

          <button className="border border-black px-6 py-3 rounded hover:bg-black hover:text-white transition">
            Place Order
          </button>
        </div>

        <Link
          to="/shop"
          className="block mt-6 text-blue-500 hover:underline"
        >
          ← Back to Shop
        </Link>
      </div>
      

    </div>
    
    <Footer/>
    </div>

  );
};

export default ProductDetails;