import { styled } from "@mui/material";
import { Box } from "@mui/system";
import React, { FunctionComponent } from "react";

type Props = { src: string; side: number };

export const Img = styled("img")({
  border: "1px solid",
  borderColor: "#0cf",
  padding: 1,
  borderRadius: "10%",
});

export const SquaredImage: FunctionComponent<Props> = ({ src, side }) => {
  return (
    <Box
      component="span"
      sx={{
        p: "1px",
        // border: "1px solid black",
      }}
    >
      <Img height={side} width={side} src={src} alt="Squared Image" />
    </Box>
  );
};
