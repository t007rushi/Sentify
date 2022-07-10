import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  thisWeek: [],
  FeaturedPlaylists: [],
  browseGenres: [],
  isLoading: true,
  isGenreLoading: true,
  isSearchLoading: true,
  searchText: "",
  searchData: [],
};

const token = localStorage.getItem("token");

export const getThisWeekSongs = createAsyncThunk(
  "songs/thisweeksongs",
  async () => {
    try {
      const { data } = await axios.get(
        "https://api.spotify.com/v1/browse/new-releases",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return data.albums.items;
    } catch (err) {
      console.log(err.msg);
    }
  }
);

export const getFeaturedPlaylists = createAsyncThunk(
  "songs/FeaturedPlaylistssongs",
  async () => {
    try {
      const { data } = await axios.get(
        "https://api.spotify.com/v1/browse/featured-playlists",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data.playlists.items;
    } catch (err) {
      console.log(err.msg);
    }
  }
);

export const getbrowseGenres = createAsyncThunk(
  "songs/browseGenressongs",
  async () => {
    try {
      const { data } = await axios.get(
        "https://api.spotify.com/v1/recommendations/available-genre-seeds",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data.genres;
    } catch (err) {
      console.log(err.msg);
    }
  }
);

export const getSearchData = createAsyncThunk(
  "songs/getSearchData",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const { data } = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: state.songs.searchText,
          type: "album",
          limit: 30,
        },
      });
      return data.albums.items;
    } catch (err) {
      console.log(err.msg);
    }
  }
);

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setSearchText: (state, { payload }) => {
      state.searchText = payload;
    },
  },
  extraReducers: {
    [getThisWeekSongs.pending]: (state) => {
      state.isLoading = true;
    },
    [getThisWeekSongs.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.thisWeek = action.payload;
    },
    [getThisWeekSongs.rejected]: (state) => {
      state.isLoading = false;
    },
    [getFeaturedPlaylists.pending]: (state) => {
      state.isLoading = true;
    },
    [getFeaturedPlaylists.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.FeaturedPlaylists = action.payload;
    },
    [getFeaturedPlaylists.rejected]: (state) => {
      state.isLoading = false;
    },
    [getbrowseGenres.pending]: (state) => {
      state.isGenreLoading = true;
    },
    [getbrowseGenres.fulfilled]: (state, action) => {
      state.isGenreLoading = false;
      state.browseGenres = action.payload;
    },
    [getbrowseGenres.rejected]: (state) => {
      state.isGenreLoading = false;
    },
    [getSearchData.pending]: (state) => {
      state.isSearchLoading = true;
    },
    [getSearchData.fulfilled]: (state, action) => {
      state.isSearchLoading = false;
      state.searchData = action.payload;
    },
    [getSearchData.rejected]: (state) => {
      state.isSearchLoading = false;
    },
  },
});

export const { setSearchText } = songsSlice.actions;

export default songsSlice.reducer;
