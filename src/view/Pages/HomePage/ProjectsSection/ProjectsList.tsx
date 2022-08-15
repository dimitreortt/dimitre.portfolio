import { Box } from "@mui/system";
import React, { FunctionComponent } from "react";
import { Font2 } from "../../../Styled/CustomFonts/Font2";

type Props = {};

export const ProjectsList: FunctionComponent<Props> = ({}) => {
  return (
    <Box>
      <Font2 size={24} fontWeight={1000} color={"secondary.main"}>
        Projects
      </Font2>
    </Box>
  );
};
