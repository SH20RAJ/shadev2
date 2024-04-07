'use client'
import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
        setMessage(data.error || 'An error occurred.');
      }
    } catch (error) {
      console.error('Error creating user:', error);
      setMessage('An error occurred.');
    }
  };

  return (
    <div className="flex w-full p-5 my-10 items-center justify-center ">
      <div className="bg-white w-full p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your Password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            >
              Login
            </button>
          </div>
          {message && <p className="text-red-500">{message}</p>}
        </form>
      </div>
    </div>
  );
}
