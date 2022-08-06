import { Button } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TestTheTest } from "../../Components/TestComponent";

type Props = {};

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      //   ease: "easeInOut",
      duration: 2,
    },
  },
};

export const ResumePage: FunctionComponent<Props> = ({}) => {
  return (
    <motion.div
      className="h-full mx-auto border m-10 p-10"
      variants={containerVariants}
      animate="visible"
      initial="hidden"
      exit="exit"
    >
      <Button
        className="mx-auto mt-10 ml-10"
        component={Link}
        to="/"
        variant="outlined"
        color="secondary"
      >
        Voltar
      </Button>
      <TestTheTest />
    </motion.div>
  );
};
