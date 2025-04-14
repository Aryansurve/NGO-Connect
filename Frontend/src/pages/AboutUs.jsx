import React from 'react';

const AboutUs = () => {
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
          <button className="sm:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto mt-8 p-6 animate-fade-in-up">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">About Us</h2>
        <p className="text-gray-600 leading-loose mb-4">
          NGO Connect is a platform dedicated to bridging the gap between NGOs and those looking to support their causes. We aim to empower communities and enhance the impact of social initiatives.
        </p>
        <p className="text-gray-600 leading-loose mb-4">
          Our mission is to connect individuals and organizations with the right NGOs, ensuring that every contribution makes a significant difference. We collaborate with a diverse range of NGOs, from those focusing on education and health to environmental conservation and social justice.
        </p>
        <h3 className="text-2xl font-semibold text-indigo-600 mt-8">Our Vision</h3>
        <p className="text-gray-600 leading-loose mt-4">
          To create a world where every NGO has the resources and support they need to succeed in their mission.
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-8">
        <p>&copy; 2024 NGO Connect. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-indigo-400 transition duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-indigo-400 transition duration-300">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;