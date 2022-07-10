import { Box, Main } from "grommet";
import React from "react";
import { CurrentSong } from "../components";

export const FooterComp = () => {
  return (
    <Box gridArea="footer" className="footer" height="5rem">
      <Main background="#181818" elevation="large" pad="small" gap="small">
        <CurrentSong />
        <Box />
      </Main>
    </Box>
  );
};
