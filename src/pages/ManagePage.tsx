import React from "react";

const ManagePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-6">Manage Your Rooms and Playlists</h2>
      <p className="text-lg mb-8">View and manage your upcoming rooms and playlists.</p>

      {/* Example Room */}
      <div className="bg-gray-700 p-6 mb-4 rounded-xl w-full md:w-1/2">
        <h3 className="text-2xl font-semibold mb-2">Room: Movie Night</h3>
        <p className="text-sm text-gray-400">Scheduled at: 8:00 PM</p>
        <button className="bg-gradient-to-r from-blue-600 to-indigo-500 py-2 px-6 text-white font-semibold rounded-lg mt-4 hover:scale-105 transition-all">
          Edit Room
        </button>
      </div>

      {/* Example Playlist */}
      <div className="bg-gray-700 p-6 rounded-xl w-full md:w-1/2">
        <h3 className="text-2xl font-semibold mb-2">Playlist: Chill Beats</h3>
        <button className="bg-gradient-to-r from-blue-600 to-indigo-500 py-2 px-6 text-white font-semibold rounded-lg mt-4 hover:scale-105 transition-all">
          Manage Playlist
        </button>
      </div>
    </div>
  );
};

export default ManagePage;
