import { Box, Grid, styled, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import profilePicRef from "../../assets/profile_pic.jpg";
import { ProjectList } from "../Components/ProjectList/ProjectList";
import { dummyText1 } from "../Dummy/dummyText1";
import { CenteredBox } from "../Styled/CenteredBox";
import { CustomBox } from "../Styled/CustomBox";
import { Font1 } from "../Styled/CustomFonts/Font1";

type Props = {};

const Img = styled("img")({
  border: "1px solid black",
});

export const HomePage: FunctionComponent<Props> = ({}) => {
  return (
    <CenteredBox sx={{}}>
      <Box
        sx={{
          height: "100%",
          minHeight: "95vh",
          boxSizing: "border-box",
          width: 1200,
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          m: 1,
          p: 1,
        }}
      >
        <Box sx={{ flexGrow: 1 }}></Box>
        <Box>
          <Grid container>
            <Grid item xs={6}>
              <CustomBox bordered pm>
                <Font1>DAMIAN WATRACZ</Font1>
                <Typography
                  sx={{ fontFamily: "Heuvetica Now Display DW" }}
                ></Typography>
                {dummyText1}
              </CustomBox>
            </Grid>
            <Grid item xs={6}>
              <CustomBox bordered pm>
                <Img src={profilePicRef} alt="profilepic" height={200} />
              </CustomBox>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "inline-block",
              border: "1px solid black",
              m: 1,
              p: 1,
            }}
          ></Box>
          <CustomBox bordered pm sx={{ width: 300 }}>
            oi
          </CustomBox>
        </Box>
        {/* <ProjectList /> */}
      </Box>
    </CenteredBox>
  );
};
