import { Box } from "@mui/material";
import React, { FunctionComponent } from "react";
import { CustomBox } from "../../Styled/CustomBox";
import { Font1 } from "../../Styled/CustomFonts/Font1";

type Props = {};

export const PresentationParagraph: FunctionComponent<Props> = ({}) => {
  return (
    <CustomBox pm>
      <Box sx={{ mb: 3 }}>
        <Font1 size={14} letterSpacing={3} color={"#999"}>
          DAMIAN WATRACZ
        </Font1>
      </Box>
      <Box>
        <Font1 size={60} fontWeight={1000} lineHeight={1}>
          Website and user interface designer
        </Font1>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Font1 color={`#999`} size={18}>
          Over the past 9 years, as an art director and designer, I’ve worked
          with big companies and up-and-coming startups to successfully help
          them reach their full potential and attract new customers.
        </Font1>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Box
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <Font1 fontWeight={1000}>View Projects</Font1>
        </Box>
      </Box>
    </CustomBox>
  );
};
