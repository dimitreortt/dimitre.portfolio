import { styled } from "@mui/material";
import { Box } from "@mui/system";
import React, { FunctionComponent } from "react";

type Props = { logoData: { logoRef: string; link: string } };

const Img = styled("img")({
  border: "1px solid",
  borderColor: "#0cf",
  padding: 1,
  borderRadius: "10%",
});

export const LogoCircle: FunctionComponent<Props> = ({ logoData }) => {
  const side = 45;

  return (
    <Box
      component="span"
      sx={{
        p: "1px",
        // border: "1px solid black",
      }}
    >
      <a href={logoData.link} target="_blank">
        <Img height={side} width={side} src={logoData.logoRef} alt="ref" />
      </a>
    </Box>
  );
};
