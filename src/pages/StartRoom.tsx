import React from "react";
import { useNavigate } from "react-router-dom";

const StartRoom: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleStartRoom = () => {
    navigate('/WatchRoom'); // Navigate to the WatchRoom page
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-6">Start a Live Room</h2>
      <p className="text-lg mb-8">Create a room to watch videos live with friends!</p>
      <button
        className="bg-gradient-to-r from-blue-600 to-indigo-500 py-3 px-8 text-white font-semibold rounded-xl hover:scale-105 transition-all"
        onClick={handleStartRoom} // Trigger navigation when clicked
      >
        Start Room
      </button>
    </div>
  );
};

export default StartRoom;
