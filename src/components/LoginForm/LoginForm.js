"use client";
import useAuth from "@/lib/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { signIn } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
    // sign in  user
    signIn(data.email, data.password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        router.push("/");
        setError(" ");
        reset();
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl text-center font-bold mb-4">
        Welcome to SHARIATPUR{" "}
        <span className="text-green-500">rent-a-car </span>!
      </h2>
      {error && <span className="text-red-500">{error}</span>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
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
        <div>
          <label htmlFor="password" className="block mb-1 font-medium">
            Password:
          </label>
          <div className="relative">
            <input
              {...register("password", { required: true })}
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
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Login
        </button>
        <div className="mt-4">
          <p className="font-semibold">
            Don&apos;t have an account ? Please{" "}
            <Link className="text-blue-500" href="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
