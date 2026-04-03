import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";

const CartPage = () => {
  const { cart, increaseQty, decreaseQty, removeItem, totalPrice } = useCart();

  return (
    <div>
    <div className="min-h-screen pt-24 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 mb-6 text-lg">Your cart is empty.</p>
            <Link
              to="/shop"
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white p-4 rounded shadow"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h2 className="font-semibold">{item.name}</h2>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-3 py-1 border rounded hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-3 py-1 border rounded hover:bg-gray-100"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-800 ml-4"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-white p-6 rounded shadow space-y-4">
              <h2 className="text-xl font-semibold">Order Summary</h2>
              <div className="flex justify-between">
                <span>Items:</span>
                <span>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition">
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
        <Footer />
    </div>
  );
};

export default CartPage;