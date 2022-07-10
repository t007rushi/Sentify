import { Box, Button, Image, Nav, Sidebar } from "grommet";
import React from "react";
import { HomeRounded, Search, Resources } from "grommet-icons";
import { useNavigate } from "react-router-dom";

const SidebarHeader = () => {
  return <Image src="../assets/Spotify_Logo_White.png" pad="small" />;
};

const SidebarButton = ({ icon, label, to, ...rest }) => {
  const navigate = useNavigate();

  return (
    <Box pad="small">
      <Button
        gap="medium"
        alignSelf="start"
        size="small"
        plain
        icon={icon}
        label={label}
        {...rest}
        onClick={() => navigate(to)}
      />
    </Box>
  );
};

const MainNavigation = () => (
  <Nav gap="small">
    <SidebarButton icon={<HomeRounded />} label="Home" to="/home" />
    <SidebarButton icon={<Search />} label="Search" to="/search" />
    <SidebarButton icon={<Resources />} label="Browse Genre" to="/genre" />
  </Nav>
);

export const SidebarComp = () => {
  return (
    <Sidebar
      header={<SidebarHeader />}
      background="black"
      gridArea="sidebar"
      height="100vh"
    >
      <MainNavigation />
    </Sidebar>
  );
};
