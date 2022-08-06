import { Box } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Functionality, ProjectType } from "../../../assets/projects/projects";

type Props = { project: ProjectType };

const FuncsListItem = ({ f }: { f: Functionality }) => {
  return (
    <Box>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Box></Box>
      </div>
    </Box>
  );
};

export const ProjectFuntionalities: FunctionComponent<Props> = ({
  project,
}) => {
  return (
    <Box>
      <ul>
        {project.functionalities.map((f) => (
          <FuncsListItem key={f.name} f={f} />
        ))}
      </ul>
    </Box>
  );
};
