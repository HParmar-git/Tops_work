import React from "react";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onTouched" }); // Validates as soon as the user leaves an input

  const onSubmit = (data) => {
    console.log("Form Submitted Successfully!", data);
  };

  const password = watch("password");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4 rounded-md">
            {/* Username Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                {...register("username", { required: "Username is required." })}
                className={`mt-1 block w-full rounded-md border px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 sm:text-sm ${
                  errors.username
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                }`}
                placeholder="johndoe"
              />
              {errors.username && (
                <p className="mt-1 text-xs text-red-600">{errors.username.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+\$/,
                    message: "Invalid email format.",
                  },
                })}
                className={`mt-1 block w-full rounded-md border px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 sm:text-sm ${
                  errors.email
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                }`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required.",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters.",
                  },
                })}
                className={`mt-1 block w-full rounded-md border px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 sm:text-sm ${
                  errors.password
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                }`}
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Please confirm your password.",
                  validate: (value) => value === password || "Passwords do not match.",
                })}
                className={`mt-1 block w-full rounded-md border px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 sm:text-sm ${
                  errors.confirmPassword
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                }`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-red-600">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
