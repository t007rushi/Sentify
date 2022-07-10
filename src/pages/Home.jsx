import React from "react";
import { Grid, Page } from "grommet";
import { SidebarComp, HeaderComp, FooterComp, MainComp } from "../layout";
export const Home = ({ mainContent }) => {
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
        <MainComp mainContent={mainContent} />
        <FooterComp />
      </Grid>
    </Page>
  );
};
