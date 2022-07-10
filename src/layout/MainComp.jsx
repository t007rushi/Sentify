import React from "react";
import { Page } from "grommet";

export const MainComp = ({ children }) => {
  return (
    <Page
      overflow={"scroll"}
      height="90vh"
      background="#121212"
      style={{ background: `linear-gradient(#0A5D36 1%,#121212 30%)` }}
      gridArea="main"
      pad="small"
    >
      {children}
    </Page>
  );
};
