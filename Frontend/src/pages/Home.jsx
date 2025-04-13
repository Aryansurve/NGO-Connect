import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">NGO Connect</h1>
          <nav className="space-x-6">
            <a href="/" className="text-white hover-underline">Home</a>
            <a href="/about" className="text-white hover-underline">About</a>
            <a href="/donate" className="text-white hover-underline">Donate</a>
            <a href="/contact" className="text-white hover-underline">Contact</a>
            <a href="/updates" className="text-white hover-underline">Updates</a>
            <a href="/register" className="text-white hover-underline">Register NGO</a>
            <a href="/ngos" className="text-white hover-underline">NGOs</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 fade-in">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Welcome to NGO Connect</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            At NGO Connect, we believe in the power of community. Our platform connects you with various NGOs that are making a difference in the world. Whether you're looking to donate, volunteer, or simply learn more about their causes, we have it all.
          </p>
        </section>

        {/* Featured NGOs */}
        <section className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Featured NGOs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-blue-600 mb-4">Hope Foundation</h4>
              <p className="text-gray-600">Focused on providing education and healthcare to underprivileged children.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-green-600 mb-4">Green Earth</h4>
              <p className="text-gray-600">Dedicated to environmental conservation and awareness.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-yellow-600 mb-4">Care for All</h4>
              <p className="text-gray-600">Aiding families in crisis by providing food, shelter, and support services.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-12">
        <p>&copy; 2024 NGO Connect. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-2">Empowering communities through connections and support.</p>
      </footer>
    </div>
  );
};

export default Home;
