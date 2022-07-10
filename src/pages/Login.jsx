import React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Image, Page, PageContent } from "grommet";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const CLIENT_ID = "9d4732920c6b4fbd95011556b552f829";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const [token, setToken] = useState("");
  useEffect(() => {
    const hash = window.location.hash;
    let token = localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [navigate, token]);

  return (
    <Page background="#1DB954" pad="large" basis="large" height="100vh">
      <PageContent>
        <Box align="center" alignContent="center">
          <Box height="small" width="large">
            <Image
              fit="contain"
              src="../assets/Spotify_Logo.png"
              alignSelf="center"
            />
          </Box>
          {!token && (
            <Button
              size="large"
              label="Login to Spotify"
              alignSelf="center"
              color={"black"}
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            />
          )}
        </Box>
      </PageContent>
    </Page>
  );
};
