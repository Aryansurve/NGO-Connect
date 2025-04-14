// import React, { useState, useEffect } from "react";

// const NGO = () => {
//   const [ngos, setNgos] = useState([]);
//   const [name, setName] = useState("");
//   const [subject, setSubject] = useState("");
//   const [description, setDescription] = useState("");
//   const [error, setError] = useState(null);
//   const [image, setImage] = useState(null); // Add this to your state

//   const [loading, setLoading] = useState(false); // Restore loading state

//   const loadNGOs = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch("http://localhost:5000/api/ngos");
//       const data = await response.json();
//       setNgos(data);
//     } catch (err) {
//       setError("Failed to load NGOs");
//       console.error("Error loading NGOs:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch NGOs on mount
//   useEffect(() => {
//     loadNGOs();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     if (!name || !subject || !description || !image) {
//       setError("All fields including an image are required");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("subject", subject);
//     formData.append("description", description);
//     formData.append("image", image); // Add image to formData

//     try {
//       const response = await fetch("http://localhost:5000/api/ngos", {
//         method: "POST",
//         body: formData, // Don't set headers manually
//       });

//       if (!response.ok) throw new Error("Failed to add NGO");

//       // Reset form
//       setName("");
//       setSubject("");
//       setDescription("");
//       setImage(null);
//       loadNGOs();
//     } catch (err) {
//       setError("Error adding NGO");
//       console.error("Error adding NGO:", err);
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
      // {/* Header */}
      // <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 shadow-lg">
      //   <div className="container mx-auto flex justify-between items-center">
      //     <h1 className="text-3xl font-bold">NGO Connect</h1>
      //     <nav className="space-x-6 hidden sm:flex">
      //       <a href="/" className="text-white hover-underline">
      //         Home
      //       </a>
      //       <a href="/about" className="text-white hover-underline">
      //         About
      //       </a>
      //       <a href="/donate" className="text-white hover-underline">
      //         Donate
      //       </a>
      //       <a href="/contact" className="text-white hover-underline">
      //         Contact
      //       </a>
      //       <a href="/ngos" className="text-white hover-underline">
      //         Register NGOs
      //       </a>
      //     </nav>
      //   </div>
      // </header>

//       {/* Main Content */}
//       <main className="flex-grow container mx-auto mt-8 p-6 fade-in">
//         <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center">
//           NGO List
//         </h2>

//         {/* Error and Loading States */}
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         {loading && (
//           <p className="text-blue-500 text-center">Loading NGOs...</p>
//         )}

//         {/* Form to Add New NGO */}
//         <form
//           onSubmit={handleSubmit}
//           className="mb-8 bg-white p-6 rounded-lg shadow-lg space-y-4"
//         >
//           <h3 className="text-lg font-semibold mb-4">Add New NGO</h3>

//           <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//             {/* NGO Name */}
//             <div>
//               <label
//                 htmlFor="ngo-name"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 NGO Name
//               </label>
//               <input
//                 type="text"
//                 id="ngo-name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="NGO Name"
//                 required
//                 className="border border-gray-300 p-2 w-full rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>

//             {/* Subject */}
//             <div>
//               <label
//                 htmlFor="ngo-subject"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 id="ngo-subject"
//                 value={subject}
//                 onChange={(e) => setSubject(e.target.value)}
//                 placeholder="Subject"
//                 required
//                 className="border border-gray-300 p-2 w-full rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//           </div>

//           {/* Description */}
//           <div>
//             <label
//               htmlFor="ngo-description"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Description
//             </label>
//             <textarea
//               id="ngo-description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Description"
//               required
//               rows="3"
//               className="border border-gray-300 p-2 w-full rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             ></textarea>
//           </div>

//           {/* Image Upload */}
//           <div>
//             <label
//               htmlFor="ngo-image"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Upload NGO Image
//             </label>
//             <input
//               type="file"
//               id="ngo-image"
//               accept="image/*"
//               onChange={(e) => setImage(e.target.files[0])}
//               required
//               className="border border-gray-300 p-2 w-full rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           {image && (
//             <div className="mt-2">
//               <p className="text-sm text-gray-500">Selected image:</p>
//               <img
//                 src={URL.createObjectURL(image)}
//                 alt="Preview"
//                 className="w-32 h-32 object-cover mt-1 rounded shadow"
//               />
//             </div>
//           )}

//           {/* Submit Button */}
//           <div className="text-right">
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 focus:outline-none"
//             >
//               Add NGO
//             </button>
//           </div>
//         </form>

//         <div id="ngo-list" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//           {ngos.map((ngo) => (
//             <div key={ngo.id} className="bg-white p-4 border rounded shadow-md">
//               {ngo.imageUrl && (
//                 <img
//                   src={ngo.imageUrl}
//                   alt={ngo.name}
//                   className="w-full h-48 object-cover mb-3 rounded"
//                 />
//               )}
//               <h3 className="text-xl font-semibold text-gray-800">
//                 {ngo.name}
//               </h3>
//               <p className="text-sm text-gray-600 mb-1">
//                 <strong>Subject:</strong> {ngo.subject}
//               </p>
//               <p className="text-sm text-gray-700">{ngo.description}</p>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white text-center p-6 mt-auto">
//         <p>&copy; 2024 NGO Connect. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default NGO;





import React, { useState, useEffect } from "react";

const NGO = () => {
  const [ngos, setNgos] = useState([]);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [mission, setMission] = useState("");
  const [impact, setImpact] = useState("");
  const [founded, setFounded] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load NGOs from the server
  const loadNGOs = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/ngos");
      const data = await response.json();
      setNgos(data);
    } catch (err) {
      setError("Failed to load NGOs");
      console.error("Error loading NGOs:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch NGOs when the component mounts
  useEffect(() => {
    loadNGOs();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!name || !subject || !description || !mission || !impact || !founded || !image) {
      setError("All fields including an image are required");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("subject", subject);
    formData.append("description", description);
    formData.append("mission", mission);
    formData.append("impact", impact);
    formData.append("founded", founded);
    formData.append("image", image); // Add image to FormData

    try {
      const response = await fetch("http://localhost:5000/api/ngos", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to add NGO");

      // Reset form after submission
      setName("");
      setSubject("");
      setDescription("");
      setMission("");
      setImpact("");
      setFounded("");
      setImage(null);
      loadNGOs(); // Reload NGOs
    } catch (err) {
      setError("Error adding NGO");
      console.error("Error adding NGO:", err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">NGO Connect</h1>
          <nav className="space-x-6 hidden sm:flex">
            <a href="/" className="text-white hover-underline">
              Home
            </a>
            <a href="/about" className="text-white hover-underline">
              About
            </a>
            <a href="/donate" className="text-white hover-underline">
              Donate
            </a>
            <a href="/contact" className="text-white hover-underline">
              Contact
            </a>
            <a href="/ngos" className="text-white hover-underline">
              Register NGOs
            </a>
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

          {/* Mission Type */}
          <div>
            <label htmlFor="ngo-mission" className="block text-sm font-medium text-gray-700 mb-1">Mission</label>
            <select
              id="ngo-mission"
              value={mission}
              onChange={(e) => setMission(e.target.value)}
              required
              className="border border-gray-300 p-2 w-full rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Mission Type</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Environment">Environment</option>
              <option value="Human Rights">Human Rights</option>
              <option value="Animal Welfare">Animal Welfare</option>
              <option value="Disaster Relief">Disaster Relief</option>
            </select>
          </div>

          {/* Impact */}
          <div>
            <label htmlFor="ngo-impact" className="block text-sm font-medium text-gray-700 mb-1">Impact</label>
            <textarea
              id="ngo-impact"
              value={impact}
              onChange={(e) => setImpact(e.target.value)}
              placeholder="Describe the impact of the NGO"
              required
              rows="4"
              className="border border-gray-300 p-2 w-full rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          {/* Founded Date */}
          <div>
            <label htmlFor="ngo-founded" className="block text-sm font-medium text-gray-700 mb-1">Founded Date</label>
            <input
              type="date"
              id="ngo-founded"
              value={founded}
              onChange={(e) => setFounded(e.target.value)}
              required
              className="border border-gray-300 p-2 w-full rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label htmlFor="ngo-image" className="block text-sm font-medium text-gray-700 mb-1">Upload NGO Image</label>
            <input
              type="file"
              id="ngo-image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              required
              className="border border-gray-300 p-2 w-full rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {image && (
            <div className="mt-2">
              <p className="text-sm text-gray-500">Selected image:</p>
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="w-32 h-32 object-cover mt-1 rounded shadow"
              />
            </div>
          )}

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 focus:outline-none"
            >
              Add NGO
            </button>
          </div>
        </form>

        {/* NGO List */}
        <div id="ngo-list" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ngos.map((ngo) => (
            <div key={ngo.id} className="bg-white p-4 border rounded shadow-md">
              {ngo.imageUrl && (
                <img
                  src={ngo.imageUrl}
                  alt={ngo.name}
                  className="w-full h-48 object-cover mb-3 rounded"
                />
              )}
              <h3 className="text-xl font-semibold text-gray-800">{ngo.name}</h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Subject:</strong> {ngo.subject}
              </p>
              <p className="text-sm text-gray-700">{ngo.description}</p>
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
