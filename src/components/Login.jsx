import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg border border-pink-300">
        <h2 className="text-3xl font-serif font-bold text-pink-900 mb-6 text-center">Welcome Back</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-pink-800 font-medium mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="you@email.com" />
          </div>
          <div>
            <label className="block text-pink-800 font-medium mb-1">Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Password" />
          </div>
          <button type="submit" className="w-full py-2 bg-pink-700 text-white font-semibold rounded-lg hover:bg-pink-800 transition">Login</button>
        </form>
        <p className="mt-4 text-center text-pink-700">New here? <a href="/register" className="underline font-semibold">Create an account</a></p>
      </div>
    </div>
  );
}
