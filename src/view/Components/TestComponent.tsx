import { AnimatePresence } from "framer-motion";
import React, { FunctionComponent, useState } from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";

type Props = { isVisible: boolean };

export const TestComponent: FunctionComponent<Props> = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          some content
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const TestTheTest = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setIsVisible((prev) => !prev)}
      >
        click me
      </Button>
      <TestComponent isVisible={isVisible} />
    </>
  );
};
