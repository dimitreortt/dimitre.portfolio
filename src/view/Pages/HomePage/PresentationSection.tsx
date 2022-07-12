import { Grid, styled } from "@mui/material";
import React, { FunctionComponent } from "react";
import { CustomBox } from "../../Styled/CustomBox";
import { PresentationParagraph } from "./PresentationParagraph";
import profilePicRef2 from "../../../assets/profile_pic2.jpg";

const height = 350;

const Img = styled("img")({
  // border: "1px solid black",
  height: height,
  width: height,
  objectFit: "cover",
});

type Props = {};

export const PresentationSection: FunctionComponent<Props> = ({}) => {
  return (
    <>
      <Grid item xs={8}>
        <PresentationParagraph />
        {/* <Typography></Typography> */}
      </Grid>
      <Grid item xs={4}>
        <CustomBox
          pm
          // bordered
          sx={{
            marginX: "auto",
            height: "100%",
          }}
        >
          <CustomBox
            // center
            flex
            // bordered
            component="span"
            sx={{ marginLeft: "auto", height: "100%" }}
          >
            <Img
              sx={{ marginLeft: "auto", marginY: "auto" }}
              src={profilePicRef2}
              alt="profilepic"
              height={200}
            />
          </CustomBox>
        </CustomBox>
      </Grid>
    </>
  );
};
