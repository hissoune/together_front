import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import PlaylistService from "../../services/PlaylistService.ts";
import { initialState } from "../initialisation";

export const fetchPlaylists = createAsyncThunk(
  "playlists/fetchAll",
  async (_, { rejectWithValue }) => {
    console.log('fuck');

    try {
      const response = await PlaylistService.getPlaylists();
      return response;
    } catch (error: any) {
      const errorMessage = error.response?.data || error.message || "Failed to fetch playlists.";
      return rejectWithValue(errorMessage);
    }
  }
);


export const createPlaylist = createAsyncThunk(
  "playlist/create",
  async (
    { name, videos }: { name: string; videos: string[] },
    { rejectWithValue }
  ) => {
    try {
      const response = await PlaylistService.createPlaylist({ name, videos });
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const playlistSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    clearError: (state) => {
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaylists.pending, (state) => {
        state.loading = true;
        state.errorMessage = null;
      })
      .addCase(fetchPlaylists.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.loading = false;
        state.datalist = action.payload;
        state.errorMessage = null;
      })
      .addCase(fetchPlaylists.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.errorMessage = action.payload || "Failed to fetch playlists.";
      })
      .addCase(createPlaylist.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPlaylist.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.datalist.push(action.payload);
        state.errorMessage = null;
      })
      .addCase(createPlaylist.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.errorMessage = action.payload || "Failed to create playlist";
      });

  },
});

export const { clearError } = playlistSlice.actions;
export default playlistSlice.reducer;
