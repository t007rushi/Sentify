import { Box, Heading, Page, Spinner } from "grommet";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GenreCard, SongCard } from "../components";
import { getbrowseGenres, getSearchData } from "../redux/features/songsSlice";

export const SearchPage = () => {
  const dispatch = useDispatch();
  const { searchText, searchData, isSearchLoading, browseGenres } = useSelector(
    (state) => state.songs
  );

  useEffect(() => {
    dispatch(getSearchData());
    dispatch(getbrowseGenres());
  }, [searchText, dispatch]);

  return (
    <Page height="100%" pad="medium">
      {searchText === "" ? (
        <Box>
          {browseGenres?.length > 0 && (
            <Heading weight="bold">Your top genres</Heading>
          )}
          <Box direction="row" wrap={true}>
            {browseGenres?.slice(0, 5)?.map((genre) => {
              return <GenreCard data={genre} />;
            })}
          </Box>
        </Box>
      ) : isSearchLoading ? (
        <Box align="center" justify="center">
          <Spinner color="white" size="large" />
        </Box>
      ) : (
        <Box direction="row" wrap={true} gap="1rem">
          {searchData?.map((songdata) => {
            return <SongCard songdata={songdata} />;
          })}
        </Box>
      )}
    </Page>
  );
};
