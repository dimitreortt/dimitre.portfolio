import "./upperBar.css";
import React, { FunctionComponent } from "react";
import { CustomBox } from "../../Styled/CustomBox";
import { motion } from "framer-motion";
import { getSvgString } from "./getLetterDSvgString";
import { Logo } from "./Logo";
import { Box } from "@mui/material";
import { NavMenu } from "./NavMenu";

type Props = {};

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
    },
  },
};

export const UpperBar: FunctionComponent<Props> = ({}) => {
  return (
    <CustomBox bordered p flex>
      <Logo />
      <Box sx={{ mr: "auto" }}></Box>
      <CustomBox bordered p>
        <NavMenu />
      </CustomBox>
    </CustomBox>
  );
};
