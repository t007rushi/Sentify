import React from "react";
import { Grid, Page } from "grommet";
import { SidebarComp, HeaderComp, FooterComp, MainComp } from "../layout";
export const Home = ({ children }) => {
  return (
    <Page>
      <Grid
        rows={["xxsmall", "medium", "xsmall"]}
        columns={["small", "flex"]}
        areas={[
          ["sidebar", "header"],
          ["sidebar", "main"],
          ["footer", "footer"],
        ]}
      >
        <HeaderComp />
        <SidebarComp />
        <MainComp>{children}</MainComp>
        <FooterComp />
      </Grid>
    </Page>
  );
};
