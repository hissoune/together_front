import {configureStore} from "@reduxjs/toolkit";
import authSlice from './slices/AuthSlice';
import playlistSlice from './slices/PlaylistSlice';


export const store = configureStore({
    reducer: {
       auth:authSlice,
       playlist:playlistSlice
    }
})
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;