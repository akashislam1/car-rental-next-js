"use client";
import useAuth from "@/lib/hooks/useAuth";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const { createUser, updateUserProfile } = useAuth();
  const router = useRouter();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const sigmUpUser = result.user;
        console.log(sigmUpUser);
        // update user profile
        updateUserProfile(sigmUpUser, data.name, data.photoURL)
          .then(() => {
            setError(" ");
            reset();
            router.push("/login");
          })
          .catch((error) => {
            setError(error);
          });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <h2 className="text-2xl text-center font-bold mb-4">
        Welcome to SHARIATPUR{" "}
        <span className="text-green-500">rent-a-car </span>!
      </h2>
      {error && <span className="text-red-500">{error}</span>}
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-medium">
            Name:
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email:
          </label>
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.email && (
            <span className="text-red-500">
              Please enter a valid email address
            </span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 font-medium">
            Password:
          </label>
          <div className="relative">
            <input
              {...register("password", { required: true, minLength: 6 })}
              type={passwordVisible ? "text" : "password"}
              id="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2"
            >
              {passwordVisible ? (
                <FaEye className="w-5 h-5 text-gray-600" />
              ) : (
                <FaEyeSlash className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
          {errors.password && (
            <span className="text-red-500">
              Password must be at least 6 characters long
            </span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="photoURL" className="block mb-1 font-medium">
            Photo URL:
          </label>
          <input
            {...register("photoURL")}
            type="text"
            id="photoURL"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Sign Up
        </button>
        <div className="mt-4">
          <p className="font-semibold">
            Already have an account ? Please{" "}
            <Link className="text-blue-500" href="/login">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
