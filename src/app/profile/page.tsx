"use client";

import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const [showJson, setShowJson] = useState(false);

  if (!user) {
    return null;
  }

  const company = user.company || {};

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">User Profile</h1>
          <button
            onClick={logout}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sair
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <tbody>
              <tr className="border-b">
                <td className="px-6 py-4 font-semibold text-gray-700">ID</td>
                <td className="px-6 py-4 text-gray-900">{user.id}</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-6 py-4 font-semibold text-gray-700">Name</td>
                <td className="px-6 py-4 text-gray-900">{user.name}</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4 font-semibold text-gray-700">Email</td>
                <td className="px-6 py-4 text-gray-900">{user.email}</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-6 py-4 font-semibold text-gray-700">Role</td>
                <td className="px-6 py-4 text-gray-900">{user.role}</td>
              </tr>
               <tr className="border-b">
                <td className="px-6 py-4 font-semibold text-gray-700">Status</td>
                <td className="px-6 py-4 text-gray-900">{user.status ? 'Active' : 'Inactive'}</td>
              </tr>
               <tr className="border-b bg-gray-50">
                <td className="px-6 py-4 font-semibold text-gray-700">Company ID</td>
                <td className="px-6 py-4 text-gray-900">{company.id}</td>
              </tr>
               <tr className="border-b">
                <td className="px-6 py-4 font-semibold text-gray-700">Company Name</td>
                <td className="px-6 py-4 text-gray-900">{company.name}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-semibold text-gray-700">Company Public ID</td>
                <td className="px-6 py-4 text-gray-900">{company.publicId}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <button
            onClick={() => setShowJson(!showJson)}
            className="text-indigo-600 hover:text-indigo-800"
          >
            {showJson ? "Hide" : "Show"} Raw JSON
          </button>
          {showJson && (
            <pre className="mt-4 p-4 bg-gray-800 text-white rounded-md overflow-x-auto">
              {JSON.stringify(user, null, 2)}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
