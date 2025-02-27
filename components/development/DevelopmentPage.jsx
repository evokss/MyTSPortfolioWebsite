import React from "react";
import Link from "next/link";
import Navbar from "../common/NavBar";

export default function DevelopmentPage() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-gray-900 lg:-mt-10">
          <div className="max-w-md p-6 bg-white m-5 border-orange-300 dark:bg-gray-900 rounded-lg border-2 dark:border-amber-600 text-center">
            <div className="text-6xl mb-4">🚧</div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Page Under Construction
            </h1>
            <p className="text-gray-600 dark:text-white mb-6">
              This page is still in the oven. <br />
              Thank you for your patience! 🍪
            </p>
            <div className="mb-2">
              <Link
                href="/"
                className="px-6 py-3 bg-rose-600 text-white rounded-lg shadow-md hover:bg-rose-500 dark:hover:bg-rose-700 transition"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
