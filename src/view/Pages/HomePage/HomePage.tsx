import React, { FunctionComponent } from "react";
import { HomeSection } from "./HomeSection/HomeSection";
import { ProjectsSection } from "./ProjectsSection/ProjectsSection";
import { motion } from "framer-motion";
import { InitialTransition } from "./InitialTransition";

type Props = {};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 2 },
  },
  exit: {
    // x: "-100vw",
    // transition: {
    //   ease: "easeInOut",
    // },
    opacity: 0,
  },
};

export const HomePage: FunctionComponent<Props> = ({}) => {
  return (
    <div>
      {/* <InitialTransition /> */}
      <motion.div
        // variants={containerVariants}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 2 },
        }}
        exit={{ opacity: 0 }}
      >
        <HomeSection />
        <ProjectsSection />
      </motion.div>
    </div>
  );
};
