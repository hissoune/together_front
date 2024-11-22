import React, { useState, useRef } from "react";
import ReactPlayer from "react-player/lazy";

const WatchRoom: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoPlayerRef = useRef<any>(null);

  // Sample playlist for demonstration
  const playlist = [
    { title: "Video 2", url: "https://www.youtube.com/watch?v=hTARzSqDdjw" },
    { title: "Video ", url: "https://www.youtube.com/watch?v=ORt3hB660UA&t=8788s" },
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    setIsPlaying(false);
    setCurrentVideoIndex(0);
    setPlayedSeconds(0);
    videoPlayerRef.current.seekTo(0); // Reset to the start
  };

  const handleNextVideo = () => {
    if (currentVideoIndex < playlist.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
      setPlayedSeconds(0);
    }
  };

  const handlePreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
      setPlayedSeconds(0);
    }
  };

  const handleProgress = (state: { playedSeconds: number }) => {
    setPlayedSeconds(state.playedSeconds);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setPlayedSeconds(newTime);
    videoPlayerRef.current.seekTo(newTime);
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-6xl font-extrabold text-shadow-lg animate-bounce mb-4">
          {playlist[currentVideoIndex]?.title}
        </h1>
        <p className="text-lg text-gray-200 animate-pulse">
          Join the fun and watch with your friends!
        </p>
      </div>

      {/* Video Player with Chat Overlay */}
      <div className="relative w-full h-96 mb-8 shadow-2xl border-2 border-white rounded-lg overflow-hidden">
        {/* Video Player */}
        <ReactPlayer
          ref={videoPlayerRef}
          url={playlist[currentVideoIndex]?.url}
          playing={isPlaying}
          controls={true} // Enable controls for seeking, play/pause, etc.
          width="100%"
          height="100%"
          onProgress={handleProgress}
          onDuration={(d) => setDuration(d)}
        />

        {/* Next/Previous Icons */}
        <div className="absolute top-1/2 w-full flex justify-between px-6 -translate-y-1/2">
          <button
            className="text-white bg-black bg-opacity-70 p-4 rounded-full hover:bg-opacity-90"
            onClick={handlePreviousVideo}
          >
            ⏮️
          </button>
          <button
            className="text-white bg-black bg-opacity-70 p-4 rounded-full hover:bg-opacity-90"
            onClick={handleNextVideo}
          >
            ⏭️
          </button>
        </div>
      </div>

      {/* Seek Bar */}
      <div className="w-full max-w-6xl flex items-center space-x-4 mb-8">
        <input
          type="range"
          min="0"
          max={duration.toFixed(0)}
          value={playedSeconds.toFixed(0)}
          onChange={handleSeek}
          className="w-full"
        />
        <span>{Math.floor(playedSeconds)}s / {Math.floor(duration)}s</span>
      </div>

      {/* Control Buttons */}
      <div className="flex space-x-4 mb-8">
        <button
          className="bg-blue-700 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-800 transition-all transform hover:scale-105"
          onClick={handlePlayPause}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          className="bg-red-700 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-red-800 transition-all transform hover:scale-105"
          onClick={handleStop}
        >
          Stop
        </button>
      </div>

      {/* Chat Section */}
      <div className="relative w-full max-w-6xl bg-black bg-opacity-50 p-4 rounded-lg">
        <div className="overflow-y-auto flex-1 mb-4 max-h-60">
          {messages.map((msg, index) => (
            <p key={index} className="text-gray-300 mb-2">
              {msg}
            </p>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <textarea
            className="bg-gray-700 text-white p-3 w-full rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message here..."
          />
          <button
            className="bg-blue-700 text-white py-3 px-8 rounded-lg hover:bg-blue-800 transition-all transform hover:scale-105"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchRoom;
