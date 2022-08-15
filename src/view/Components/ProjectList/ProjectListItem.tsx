import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { FunctionComponent } from "react";
import { Project } from "../../../domain/Type";
import { Font2 } from "../../Styled/CustomFonts/Font2";
import { ProjectDescription } from "./ProjectDescription";
import { ProjectTechs } from "./ProjectTechs";
import { ProjectTitle } from "./ProjectTitle";

type Props = { project: Project };

export const ProjectListItem: FunctionComponent<Props> = ({ project }) => {
  return (
    <Box sx={{ p: 1, m: 1, border: "1px solid black" }}>
      <Grid container>
        <Grid item xs={6} className="border">
          oi
        </Grid>
        <Grid item xs={6} className="border">
          <ProjectTitle title={project.name} />
          <ProjectDescription description={project.description as string} />
          <ProjectTechs techs={project.techs} />
        </Grid>
      </Grid>
    </Box>
  );
};
