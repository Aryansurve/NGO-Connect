import React, { useState, useEffect } from 'react';

const NGO = () => {
  const [ngos, setNgos] = useState([]);
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to load NGOs from the API
  const loadNGOs = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/ngos');
      const data = await response.json();
      setNgos(data);
    } catch (err) {
      setError('Failed to load NGOs');
      console.error('Error loading NGOs:', err);
    } finally {
      setLoading(false);
    }
  };

  // Call loadNGOs once when the component mounts
  useEffect(() => {
    loadNGOs();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !subject || !description) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/ngos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, subject, description }),
      });

      if (!response.ok) {
        throw new Error('Failed to add NGO');
      }

      // Reset form and reload NGOs
      setName('');
      setSubject('');
      setDescription('');
      loadNGOs();
    } catch (error) {
      setError('Error adding NGO');
      console.error('Error adding NGO:', error);
    }
  };

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
      <main className="flex-grow container mx-auto mt-8 p-6 fade-in">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center">NGO List</h2>

        {/* Error and Loading States */}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {loading && <p className="text-blue-500 text-center">Loading NGOs...</p>}

        {/* Form to Add New NGO */}
        <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-lg space-y-4">
          <h3 className="text-lg font-semibold mb-4">Add New NGO</h3>
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* NGO Name */}
            <div>
              <label htmlFor="ngo-name" className="block text-sm font-medium text-gray-700 mb-1">NGO Name</label>
              <input
                type="text"
                id="ngo-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="NGO Name"
                required
                className="border border-gray-300 p-2 w-full rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="ngo-subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="ngo-subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                required
                className="border border-gray-300 p-2 w-full rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="ngo-description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              id="ngo-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
              rows="3"
              className="border border-gray-300 p-2 w-full rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 focus:outline-none">
              Add NGO
            </button>
          </div>
        </form>

        {/* NGO List */}
        <div id="ngo-list">
          {ngos.map((ngo) => (
            <div key={ngo._id} className="mb-4 p-4 border border-gray-300 rounded-lg">
              <h3 className="text-xl font-semibold">{ngo.name}</h3>
              <p><strong>Subject:</strong> {ngo.subject}</p>
              <p>{ngo.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-auto">
        <p>&copy; 2024 NGO Connect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NGO;
