import { Box, Card, CardBody, CardFooter, Image, Text } from "grommet";
import React from "react";

export const SongCard = ({ songdata }) => {
  return (
    <Card
      pad="small"
      background={{ color: "#181818" }}
      gap="medium"
      width="10rem"
      height="15rem"
      hoverIndicator
      style={{ boxShadow: "none", cursor: "pointer" }}
      flex={{ grow: 1 }}
      margin="5px"
      className="songcard"
    >
      <CardBody>
        <Image src={songdata?.images[0]?.url} />
      </CardBody>
      <CardFooter>
        <Box>
          <Text size="">{songdata?.name?.slice(0, 10)}</Text>
          <Box
            color="#B3B3B3"
            direction="row"
            justify="center"
            align="center"
            gap="5px"
          >
            <Text size="xsmall">{songdata?.release_date}</Text>
          </Box>
        </Box>
      </CardFooter>
    </Card>
  );
};
