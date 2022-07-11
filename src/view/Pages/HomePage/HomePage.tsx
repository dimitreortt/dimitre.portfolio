import { Box, Grid, styled, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import profilePicRef from "../../../assets/profile_pic.jpg";
import profilePicRef2 from "../../../assets/profile_pic2.jpg";
import { CenteredBox } from "../../Styled/CenteredBox";
import { CustomBox } from "../../Styled/CustomBox";
import { Font1 } from "../../Styled/CustomFonts/Font1";
import { PresentationParagraph } from "./PresentationParagraph";
import { Link } from "react-router-dom";
import { UpperBar } from "../../Components/UpperBar/UpperBar";

type Props = {};

const height = 400;

const Img = styled("img")({
  // border: "1px solid black",
  height: height,
  width: height,
  objectFit: "cover",
});

export const HomePage: FunctionComponent<Props> = ({}) => {
  return (
    <CenteredBox sx={{ backgroundColor: "#F7F6F2" }}>
      {/* <Link to="/animated">animated</Link> */}
      <Box
        sx={{
          height: "100%",
          minHeight: "95vh",
          boxSizing: "border-box",
          width: 1200,
          display: "flex",
          flexDirection: "column",
          backgroundSize: "cover",
          m: 1,
          p: 1,
        }}
      >
        <UpperBar />
        <Box sx={{ marginY: "auto" }}>
          <Grid container>
            <Grid item xs={6}>
              <PresentationParagraph />
              {/* <Typography></Typography> */}
            </Grid>
            <Grid item xs={6}>
              <CustomBox pm bordered sx={{ marginX: "auto", height: "100%" }}>
                <CustomBox
                  // center
                  flex
                  bordered
                  component="span"
                  sx={{ marginLeft: "auto", height: "100%" }}
                >
                  <Img
                    sx={{ marginX: "auto", marginY: "auto" }}
                    src={profilePicRef2}
                    alt="profilepic"
                    height={200}
                  />
                </CustomBox>
              </CustomBox>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ display: "flex" }}></Box>
        {/* <ProjectList /> */}
      </Box>
    </CenteredBox>
  );
};
