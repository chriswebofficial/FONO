import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Footer from "../components/Footer";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setMessage(
      "⚠️ This is a demo site. No real account is created. Redirecting..."
    );

    setTimeout(() => {
      navigate("/demo");
    }, 1500);
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          
          <h1 className="text-2xl font-bold mb-2 text-center">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          <p className="text-xs text-gray-400 text-center mb-4">
            Demo only — no real accounts are created.
          </p>

          {/* Demo Message */}
          {message && (
            <div className="bg-yellow-100 text-yellow-700 p-3 rounded text-sm text-center mb-4">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {!isSignIn && (
              <div>
                <label className="block text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg transition font-medium ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-900"
              }`}
            >
              {loading
                ? "Redirecting..."
                : isSignIn
                ? "Sign In"
                : "Create Account"}
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600 text-sm">
            {isSignIn
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <button
              onClick={() => setIsSignIn(!isSignIn)}
              className="text-green-600 font-medium hover:underline"
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AuthPage;