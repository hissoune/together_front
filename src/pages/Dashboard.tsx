import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardHub: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-900 via-black to-gray-800 text-white px-8 py-6 relative overflow-hidden">
      {/* Neon Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="blur-3xl rounded-full bg-cyan-500 w-[300px] h-[300px] top-10 left-20 opacity-40"></div>
        <div className="blur-3xl rounded-full bg-blue-600 w-[200px] h-[200px] top-40 right-10 opacity-30"></div>
        <div className="blur-3xl rounded-full bg-indigo-700 w-[250px] h-[250px] bottom-20 left-40 opacity-40"></div>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-extrabold text-center mb-16 z-10 relative">
        Stream<span className="text-cyan-400">Control</span> Hub
      </h1>

      {/* Navigation Buttons */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 relative z-10">
        {/* Start a Room */}
        <div
          onClick={() => navigate("/start-room")}
          className="group w-64 h-64 bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-700 hover:from-indigo-600 hover:via-blue-700 hover:to-cyan-500 rounded-3xl flex flex-col justify-center items-center shadow-lg shadow-blue-500/50 hover:shadow-indigo-500/50 cursor-pointer transition-all"
        >
          <span className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
            Start Room
          </span>
          <span className="text-sm text-gray-300 group-hover:text-gray-200">
            Go live with your playlist
          </span>
        </div>

        <div
          onClick={() => navigate("/playlists")}
          className="group w-64 h-64 bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-700 hover:from-indigo-600 hover:via-blue-700 hover:to-cyan-500 rounded-3xl flex flex-col justify-center items-center shadow-lg shadow-blue-500/50 hover:shadow-indigo-500/50 cursor-pointer transition-all"
        >
          <span className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
            Playlists
          </span>
          <span className="text-sm text-gray-300 group-hover:text-gray-200">
            Manage your playlists
          </span>
        </div>

        <div
          onClick={() => navigate("/manage")}
          className="group w-64 h-64 bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-700 hover:from-indigo-600 hover:via-blue-700 hover:to-cyan-500 rounded-3xl flex flex-col justify-center items-center shadow-lg shadow-blue-500/50 hover:shadow-indigo-500/50 cursor-pointer transition-all"
        >
          <span className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
            Manage
          </span>
          <span className="text-sm text-gray-300 group-hover:text-gray-200">
            Organize playlists & rooms
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHub;
