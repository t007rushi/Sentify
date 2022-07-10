import { Box, Text } from "grommet";
import React from "react";
import { SongCard } from "./SongCard";

export const PlaylistRow = ({ Collection, title, start }) => {
  return (
    <Box gap="2rem">
      <Box direction="row" justify="between" pad="small">
        <Text weight="bold" size="2rem">
          {" "}
          {title}{" "}
        </Text>
        <Text color="dark-4">See All</Text>
      </Box>
      <Box direction="row" gap="small">
        {Collection?.slice(start, start + 7).map((songdata) => {
          return <SongCard songdata={songdata} />;
        })}
      </Box>
    </Box>
  );
};
