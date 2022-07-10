import { Box, Page, Spinner } from "grommet";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GenreCard } from "../components";
import { getbrowseGenres } from "../redux/features/songsSlice";

export const Genre = () => {
  const dispatch = useDispatch();
  const { browseGenres, isGenreLoading } = useSelector((state) => state.songs);
  useEffect(() => {
    dispatch(getbrowseGenres());
  }, [dispatch]);

  return (
    <Page height="100%" pad="small">
      {isGenreLoading ? (
        <Box align="center" justify="center">
          <Spinner color="white" size="large" />
        </Box>
      ) : (
        <Box direction="row" wrap={true}>
          {browseGenres?.map((genre) => {
            return <GenreCard data={genre} />;
          })}
        </Box>
      )}
    </Page>
  );
};
