import { Box, styled } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Functionality, ProjectType } from "../../../assets/projects/projects";

type Props = { project: ProjectType };

const Img = styled("img")({
  objectFit: "cover",
  padding: 10,
  // margin: 10,
});

const FuncsListItem = ({ f }: { f: Functionality }) => {
  return (
    <Box>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <Box>
          <Img width={"100%"} src={f.imageUrl}></Img>
        </Box>
        <Box className="col-span-2">{f.description}</Box>
      </div>
    </Box>
  );
};

export const ProjectFuntionalities: FunctionComponent<Props> = ({
  project,
}) => {
  console.log(project);
  return (
    <Box>
      {project.functionalities.map((f) => (
        <FuncsListItem key={f.name} f={f} />
      ))}
    </Box>
  );
};
