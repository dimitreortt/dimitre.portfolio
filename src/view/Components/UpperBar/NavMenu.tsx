import { Box } from "@mui/system";
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Font1 } from "../../Styled/CustomFonts/Font1";
import { ResumeButton } from "./ResumeButton";

type Props = {};

const fontSize = 19;

const MenuItem = ({ children }: any) => {
  return (
    <Box component={"span"} sx={{ pr: 2 }}>
      <Font1 size={fontSize}>{children}</Font1>
    </Box>
  );
};

export const NavMenu: FunctionComponent<Props> = ({}) => {
  const scrollDown = (info: any) => {};

  return (
    <Box>
      <MenuItem>About</MenuItem>
      <Link to="/project/1">
        <MenuItem>Projects</MenuItem>
      </Link>
      <MenuItem>Contact</MenuItem>
      <ResumeButton fontSize={fontSize} />
    </Box>
  );
};
