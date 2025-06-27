import React from "react";

const About = () => {
  return (
    <div className="lg:w-9/12 mx-auto p-8 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* ⚠️ Warning */}
      <div className="bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100 border-l-4 border-red-500 p-4 mb-8 rounded-lg shadow">
        <strong>⚠️ Warning:</strong> All data on this page is completely fake and randomly generated for demo purposes only.
      </div>

      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-6 text-green-700 dark:text-green-400">
        About Green Commandos
      </h1>

      {/* Description */}
      <p className="mb-8 text-lg max-w-3xl">
        Green Commandos is a fictional organization passionate about sustainable gardening, plant-based knowledge sharing, and empowering hobbyists across the globe. While we don't actually exist (yet 😉), this demo showcases how an About page might look in a real-world application.
      </p>

      {/* Fake Info Section */}
      <div className="grid md:grid-cols-2 gap-8 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-green-700 dark:text-green-300">Contact Information</h2>
          <ul className="space-y-2">
            <li>Email: greencommandos@fakeemail.com</li>
            <li>Support: support@greencommandos.help</li>
            <li>Phone: +88 01700 123 456</li>
            <li>Fax: +88 01700 987 654</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2 text-green-700 dark:text-green-300">Our (Fake) Headquarters</h2>
          <ul className="space-y-2">
            <li>🏢 123 Jungle Street, Treeville, Planet Earth</li>
            <li>📦 Warehouse: Unit 5B, Leafy Industrial Zone</li>
            <li>🌐 Server Room: 127.0.0.1</li>
            <li>🚛 Delivery Van: Currently stuck in a bush</li>
          </ul>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4 text-green-700 dark:text-green-400">Meet the (Imaginary) Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Captain Chlorophyll", role: "Chief Gardener", email: "captain@greencommandos.com" },
            { name: "Compost Queen", role: "Soil Scientist", email: "queen@greencommandos.com" },
            { name: "Leaf Man", role: "Design & UI", email: "leaf@greencommandos.com" },
          ].map((member, i) => (
            <div key={i} className="p-4 bg-green-50 dark:bg-green-900 rounded-lg shadow text-center">
              <h3 className="text-xl font-bold text-green-800 dark:text-green-200">{member.name}</h3>
              <p className="text-sm mb-1 text-gray-700 dark:text-gray-300">{member.role}</p>
              <p className="text-xs text-green-700 dark:text-green-400">{member.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
