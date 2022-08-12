import { Box } from "@mui/material";
import React, { FunctionComponent } from "react";
import { LogoCircle } from "./LogoCircle";
import { logosRefs } from "./logosRefs";

type Props = {};

export const TecnologiesLogos: FunctionComponent<Props> = ({}) => {
  const refs = logosRefs();

  console.log(refs);

  return (
    <Box className="flex">
      {refs.map((ref, index) => (
        <LogoCircle logoData={ref} key={index}></LogoCircle>
      ))}
    </Box>
  );
};
