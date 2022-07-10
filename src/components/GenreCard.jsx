import { Card, CardFooter, CardHeader, Text } from "grommet";
import React from "react";

export const GenreCard = ({ data }) => {
  const colorS =
    "#" +
    Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0") +
    Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0") +
    Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");

  return (
    <Card
      background={{ color: colorS }}
      gap="medium"
      width="12rem"
      height="12rem"
      margin="10px"
      style={{
        boxShadow: "none",
        background: `linear-gradient(to right,${colorS},pink)`,
      }}
      flex={{ grow: 1 }}
    >
      <CardHeader pad={{ horizontal: "medium", vertical: "small" }}>
        <Text size="large" color="white">
          {data.toUpperCase()}
        </Text>
      </CardHeader>
      <CardFooter pad={{ horizontal: "medium", vertical: "small" }}>
        <Text size="xsmall"></Text>
      </CardFooter>
    </Card>
  );
};
