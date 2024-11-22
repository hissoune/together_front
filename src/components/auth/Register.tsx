import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import { register } from "../../redux/slices/AuthSlice";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
});

  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch()
    const navigate = useNavigate();

  const validateField = (name: string, value: string): string => {
    switch (name) {
        case "email":
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value) ? "" : "Invalid email format.";
        case "password":
            return value.length >= 6 ? "" : "Password must be at least 6 characters.";
        default:
            return "";
    }}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
   
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
        email: validateField("email", formData.email),
        password: validateField("password", formData.password),
    };
    setErrors(newErrors);

    if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match!");
        return;
    }

    if (!Object.values(newErrors).some((error) => error)) {
        try {
            const resultAction = await dispatch(register(
                formData
            ));

            if (register.fulfilled.match(resultAction)) {
                alert("Registration Successful!");
                navigate('/login'); // Redirect to login
            } else {
                setError(resultAction.payload.error || "Registration failed");
            }
        } catch (err) {
            setError("Something went wrong!");
        }
    }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-blue-300 to-blue-500">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8 animate-fade-in">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition ease-in-out duration-200"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition ease-in-out duration-200"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition ease-in-out duration-200"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition ease-in-out duration-200"
              placeholder="Re-enter your password"
              required
            />
          </div>
          {error && (
            <p className="text-blue-500 text-center text-sm">{error}</p>
          )}
          <button
            type="submit"
            className="w-full py-3 px-6 text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-red-500 hover:to-blue-500 rounded-lg shadow-lg font-medium text-lg transition-transform transform hover:scale-105 duration-200 ease-in-out"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-500 font-medium hover:underline"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
