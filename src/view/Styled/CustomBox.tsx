import { styled } from "@mui/material";
import { Box } from "@mui/system";

export const CustomBox = styled(Box, { shouldForwardProp: () => true })<any>(
  ({ bordered, pm, p, center, flex }) => {
    return {
      border: bordered ? "1px solid black" : "",
      padding: pm || p ? "8px" : "",
      margin: pm ? "8px" : "",
      display: center || flex ? "flex" : "block",
      justifyContent: center ? "center" : "start",
    };
  }
);
