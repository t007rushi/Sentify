import React from "react";
import { Box, Image, RangeInput, Text } from "grommet";
import {
  Capacity,
  ChapterNext,
  ChapterPrevious,
  CirclePlay,
  Cycle,
  Directions,
  Favorite,
  Microphone,
  PhoneVertical,
  VirtualStorage,
  Volume,
} from "grommet-icons";

export const CurrentSong = () => {
  return (
    <Box justify="between" direction="row">
      <Box
        direction="row"
        gap="1rem"
        justify="center"
        align="center"
        margin={{ top: "1rem" }}
      >
        <Image
          height="60rem"
          src={
            "https://i.scdn.co/image/ab67706f00000003140aae64fe38399be89fb4af"
          }
        />
        <Box>
          <Text size="medium">Srivalli</Text>
          <Text size="small" color="dark-4">
            Devi Sri Prasad, Sid Sriram
          </Text>
        </Box>
        <Favorite />
        <Capacity />
      </Box>
      <Box gap="2rem" align="center" margin="5px" pad="small">
        <Box direction="row" gap="1rem" align="center" justify="center">
          <Directions />
          <ChapterPrevious title="prev" />
          <CirclePlay size="large" />
          <ChapterNext />
          <Cycle />
        </Box>
        <Box width="30rem">
          <RangeInput size="small" />
        </Box>
      </Box>

      <Box direction="row" gap="1rem" align="center">
        <PhoneVertical />
        <VirtualStorage />
        <Microphone />
        <Volume />

        <RangeInput size="small" />
      </Box>
    </Box>
  );
};
