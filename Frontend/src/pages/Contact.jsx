import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">NGO Connect</h1>
          <nav className="space-x-6 hidden sm:flex">
            <a href="/" className="text-white hover-underline">Home</a>
            <a href="/about" className="text-white hover-underline">About</a>
            <a href="/donate" className="text-white hover-underline">Donate</a>
            <a href="/contact" className="text-white hover-underline">Contact</a>
            <a href="/ngos" className="text-white hover-underline">Register NGOs</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto mt-10 p-6 sm:p-12 fade-in">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          If you have any questions or inquiries, feel free to reach out to us through the form below.
        </p>
        <form className="bg-white p-8 rounded-xl shadow-lg max-w-lg mx-auto space-y-6">
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-12">
        <p>&copy; 2024 NGO Connect. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-indigo-400 transition duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-indigo-400 transition duration-300">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
