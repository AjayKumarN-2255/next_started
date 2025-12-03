"use client";
import React from 'react'
import { Login } from '../actions/Login';

function LoginForm() {
    return (
        <form className="space-y-4 max-w-sm mx-auto p-6"
        action={Login}>
            {/* Email */}
            <div className="grid grid-cols-4 items-center gap-2">
                <label className="font-medium text-gray-700">Email:</label>
                <input
                    type="email"
                    name="email"
                    className={`col-span-3 w-full px-3 py-2 rounded-lg border border-gray-300 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Enter your email"
                />
            </div>

            {/* Password */}
            <div className="grid grid-cols-4 items-center gap-2">
                <label className="font-medium text-gray-700">Password:</label>
                <input
                    type="password"
                    name="password"
                    className={`col-span-3 w-full px-3 py-2 rounded-lg border border-gray-300 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Enter your password"
                />
            </div>

            {/* Button */}
            <button
                className={`w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition
                cursor-pointer"`}
            >
                Login
            </button>
        </form>
    )
}

export default LoginForm