import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { FunctionComponent } from "react";
import { CustomBox } from "../../../Styled/CustomBox";
import { Font1 } from "../../../Styled/CustomFonts/Font1";
// import { Font1 } from "../../../Styled/CustomFonts/Font1";

type Props = {};

export const ProjectsSection: FunctionComponent<Props> = ({}) => {
  return (
    <CustomBox bordered>
      <Box sx={{ height: 600 }}>
        <Grid container>
          <Grid item xs={12}>
            <CustomBox bordered flex sx={{ height: 80 }}>
              <Box sx={{ width: "49%" }}>
                <Font1 size={40} fontWeight={1000} lineHeight={1}>
                  {/* Website and user interface designer */}
                  Drone Report Beta
                </Font1>
              </Box>
              <Box>
                <Font1 color={`#999`} size={18}>
                  Over the past 9 years, as an art director and designer, I’ve
                  worked with big companies and up-and-coming startups to
                  successfully help them reach their full potential and attract
                  new customers.
                </Font1>
              </Box>
            </CustomBox>
          </Grid>
          <Grid item xs={4}>
            <CustomBox bordered sx={{ height: 200 }}></CustomBox>
          </Grid>
          <Grid item xs={4}>
            <CustomBox bordered sx={{ height: 200 }}></CustomBox>
          </Grid>
          <Grid item xs={4}>
            <CustomBox bordered sx={{ height: 200 }}></CustomBox>
          </Grid>
        </Grid>
      </Box>
    </CustomBox>
  );
};
