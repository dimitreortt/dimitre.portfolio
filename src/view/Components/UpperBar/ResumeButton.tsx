import { Button } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

type Props = { fontSize?: number };

export const ResumeButton: FunctionComponent<Props> = ({ fontSize }) => {
  return (
    <Button
      component={Link}
      to="/resume"
      variant="outlined"
      color="secondary"
      sx={{ textTransform: "none", fontSize }}
    >
      Resume
    </Button>
  );
};
