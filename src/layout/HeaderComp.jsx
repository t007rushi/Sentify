import { Box, Button, Heading } from "grommet";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchText } from "../redux/features/songsSlice";

export const HeaderComp = () => {
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem("token");
  };

  const navigate = useNavigate();
  return (
    <Box
      background="#0A5D36"
      gridArea="header"
      align="center"
      justify="between"
      direction="row"
      pad="medium"
    >
      <Heading level="3"> Syntify</Heading>
      <input
        onClick={() => navigate("/search")}
        placeholder="search artists,songs or albums..."
        onChange={(event) => dispatch(setSearchText(event.target.value))}
        type="text"
        style={{
          padding: "10px",
          width: "15rem",
          borderRadius: "1rem",
          border: "none",
        }}
      />
      <Button
        alignSelf="center"
        label="logout"
        onClick={() => {
          logout();
          navigate("/");
        }}
      />
    </Box>
  );
};
