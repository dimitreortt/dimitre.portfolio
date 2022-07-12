import { Button } from "@mui/material";
import React, { FunctionComponent } from "react";

type Props = { fontSize?: number };

export const ResumeButton: FunctionComponent<Props> = ({ fontSize }) => {
  return (
    <Button
      variant="outlined"
      color="secondary"
      sx={{ textTransform: "none", fontSize }}
    >
      Resume
    </Button>
  );
};
