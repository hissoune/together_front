import React, { useState } from "react";

const CreatePage: React.FC = () => {
  const [videoTitle, setVideoTitle] = useState("");
  const [playlistName, setPlaylistName] = useState("");

  const handleSubmit = () => {
    alert(`Created Playlist: ${playlistName} with Video: ${videoTitle}`);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center px-8">
      <h2 className="text-4xl font-bold mb-6">Create a Video and Playlist</h2>

      {/* Video Title */}
      <input
        type="text"
        placeholder="Video Title"
        value={videoTitle}
        onChange={(e) => setVideoTitle(e.target.value)}
        className="bg-gray-700 text-white px-4 py-2 rounded-xl mb-4 w-full md:w-1/2"
      />

      {/* Playlist Name */}
      <input
        type="text"
        placeholder="Playlist Name"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
        className="bg-gray-700 text-white px-4 py-2 rounded-xl mb-6 w-full md:w-1/2"
      />

      {/* Create Button */}
      <button
        onClick={handleSubmit}
        className="bg-gradient-to-r from-blue-600 to-indigo-500 py-3 px-8 text-white font-semibold rounded-xl hover:scale-105 transition-all"
      >
        Create Playlist & Video
      </button>
    </div>
  );
};

export default CreatePage;
