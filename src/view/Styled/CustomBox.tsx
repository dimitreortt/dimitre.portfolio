import { styled } from "@mui/material";
import { Box } from "@mui/system";

export const CustomBox = styled(Box, { shouldForwardProp: () => true })<any>(
  ({ bordered, pm }) => {
    return {
      border: bordered ? "1px solid black" : "",
      padding: pm ? "8px" : "",
      margin: pm ? "8px" : "",
    };
  }
);
