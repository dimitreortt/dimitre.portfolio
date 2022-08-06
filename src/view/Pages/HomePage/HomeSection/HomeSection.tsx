import { Box, Grid } from "@mui/material";
import React, { FunctionComponent } from "react";
import { CenteredBox } from "../../../Styled/CenteredBox";
import { CustomBox } from "../../../Styled/CustomBox";
import { UpperBar } from "../../../Components/UpperBar/UpperBar";
import { TecnologiesLogos } from "../../../Components/TecnologiesLogos/TecnologiesLogos";
import SocialIcons from "../../../Components/SocialIcons/SocialIcons";
import { PresentationSection } from "./PresentationSection";

type Props = {};

export const HomeSection: FunctionComponent<Props> = ({}) => {
  return (
    <CenteredBox>
      {/* <Link to="/animated">animated</Link> */}
      <Box
        sx={{
          height: "100%",
          minHeight: "100vh",
          boxSizing: "border-box",
          width: 1200,
          display: "flex",
          flexDirection: "column",
          backgroundSize: "cover",
          // m: 1,
          p: 1,
        }}
      >
        <UpperBar />
        <Box sx={{ marginY: "auto" }}>
          <Grid container>
            <PresentationSection />
          </Grid>
        </Box>
        <Box sx={{ display: "flex" }}>
          <CustomBox sx={{ width: 200, flexGrow: 1 }}>
            <SocialIcons />
          </CustomBox>
          <TecnologiesLogos />
        </Box>
        {/* <ProjectList /> */}
      </Box>
    </CenteredBox>
  );
};

/**
 * firebase
 * material ui
 * react
 * redux-toolkit
 * css
 * typescript
 * javascript
 * node
 * express
 * jest
 * react testing library
 * gcp
 * tdd
 * clean architecture
 */
