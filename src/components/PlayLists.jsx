import React, { useEffect } from "react";
import { Box } from "grommet";
import { useDispatch, useSelector } from "react-redux";
import {
  getFeaturedPlaylists,
  getThisWeekSongs,
} from "../redux/features/songsSlice";
import { PlaylistRow } from "./PlaylistRow";

export const PlayLists = () => {
  const dispatch = useDispatch();
  const { thisWeek, FeaturedPlaylists } = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(getThisWeekSongs());
    dispatch(getFeaturedPlaylists());
  }, [dispatch]);
  return (
    <Box gap="20rem" pad="small">
      <PlaylistRow
        Collection={thisWeek}
        title="Released This Week songs"
        start={0}
      />
      <PlaylistRow
        Collection={FeaturedPlaylists}
        title="Featured Playlists"
        start={0}
      />
      <PlaylistRow
        Collection={FeaturedPlaylists}
        title="Your Playlists"
        start={7}
      />
      <PlaylistRow Collection={thisWeek} title="Trending Songs" start={7} />
    </Box>
  );
};
