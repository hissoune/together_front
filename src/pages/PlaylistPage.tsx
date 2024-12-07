import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { fetchPlaylists ,createPlaylist} from "../redux/slices/PlaylistSlice"; // Redux thunk action
import { RootState } from "../redux/store"; // RootState type for useSelector

interface Playlist {
  id: string;
  name: string;
  videos: string[];
}

const PlaylistPage: React.FC = () => {
  const dispatch = useDispatch();
  const { datalist: playlists, loading, errorMessage } = useSelector(
    (state: RootState) => state.playlist // Matches `store` reducer name
  );
    
  const [showPopup, setShowPopup] = useState(false);
  const [currentPlaylist, setCurrentPlaylist] = useState<Playlist | null>(null);
  const [playlistName, setPlaylistName] = useState("");
  const [videoLinks, setVideoLinks] = useState<string[]>([""]);

  // Fetch playlists on component mount
  useEffect(() => {
    dispatch(fetchPlaylists() as any); // Dispatching thunk action
  }, []);

  const openPopup = (playlist: Playlist | null = null) => {
    if (playlist) {
      setCurrentPlaylist(playlist);
      setPlaylistName(playlist.name);
      setVideoLinks(playlist.videos);
    } else {
      setCurrentPlaylist(null);
      setPlaylistName("");
      setVideoLinks([""]);
    }
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPlaylistName("");
    setVideoLinks([""]);
    setCurrentPlaylist(null);
  };

  const addVideoLink = () => setVideoLinks([...videoLinks, ""]);

  const removeVideoLink = (index: number) => {
    setVideoLinks(videoLinks.filter((_, i) => i !== index));
  };

  const updateVideoLink = (index: number, value: string) => {
    const updatedVideos = [...videoLinks];
    updatedVideos[index] = value;
    setVideoLinks(updatedVideos);
  };

  const handleSubmit = () => {
    if (!playlistName.trim() || videoLinks.some((video) => !video.trim())) {
      alert("Please fill in all fields");
      return;
    }
  
    if (currentPlaylist) {
      // Update logic here if required
    } else {
      // Create a new playlist
      dispatch(
        createPlaylist({
          name: playlistName,
          videos: videoLinks.filter((video) => video.trim()), // Filter out empty links
        }) as any
      );
    }
    closePopup();
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white px-8 py-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Your Playlists</h1>

      {/* Display Loading/Error States */}
      {loading && <p className="text-center text-gray-400">Loading playlists...</p>}
      {errorMessage && <p className="text-center text-red-500">{errorMessage}</p>}

      {/* Playlist List */}
      <div className="space-y-4">
        {playlists?.map((playlist) => (
          <div
            key={playlist._id}
            className="bg-gray-700 px-4 py-3 rounded-lg flex flex-col"
          >
            <div className="mb-4">
              <h2 className="text-xl font-semibold">{playlist.name}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {playlist.videos.map((video, index) => (
                <ReactPlayer
                  key={index}
                  url={video}
                  controls
                  width="100%"
                  height="200px"
                  className="rounded-lg overflow-hidden"
                />
              ))}
            </div>
            <button
              onClick={() => openPopup(playlist)}
              className="mt-4 bg-blue-600 px-4 py-2 text-white rounded-lg hover:bg-blue-500"
            >
              Update
            </button>
          </div>
        ))}
      </div>

      {/* Add Playlist Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => openPopup()}
          className="bg-green-600 px-6 py-3 text-white font-semibold rounded-lg hover:bg-green-500"
        >
          Add New Playlist
        </button>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">
              {currentPlaylist ? "Update Playlist" : "Create Playlist"}
            </h2>

            {/* Playlist Name */}
            <input
              type="text"
              placeholder="Playlist Name"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg mb-4 w-full"
            />

            {/* Video Links */}
            <div className="space-y-2">
              {videoLinks.map((video, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder={`Video Link ${index + 1}`}
                    value={video}
                    onChange={(e) => updateVideoLink(index, e.target.value)}
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg flex-grow"
                  />
                  <button
                    onClick={() => removeVideoLink(index)}
                    className="bg-red-600 px-3 py-2 text-white rounded-lg hover:bg-red-500"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={addVideoLink}
              className="mt-4 bg-blue-600 px-4 py-2 text-white rounded-lg hover:bg-blue-500"
            >
              Add Video
            </button>

            {/* Save Button */}
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={closePopup}
                className="bg-gray-600 px-4 py-2 text-white rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-green-600 px-4 py-2 text-white rounded-lg hover:bg-green-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaylistPage;
