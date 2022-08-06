import "./upperBar.css";
import React, { FunctionComponent } from "react";
import { CustomBox } from "../../Styled/CustomBox";
import { motion } from "framer-motion";
import { getSvgString } from "./getLetterDSvgString";

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

export const Logo: FunctionComponent<Props> = ({}) => {
  return (
    <CustomBox>
      <svg
        className="logo-svg"
        height="60"
        width="60"
        // xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 46 46"
      >
        <motion.path
          d="M0 14 L0 32 L20 46 L40 32 L40 14 L20 0Z"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          // filter="url(#f2)"
        />
        <motion.path
          d={getSvgString()}
          fill={"none"}
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        ></motion.path>
      </svg>
    </CustomBox>
  );
};
