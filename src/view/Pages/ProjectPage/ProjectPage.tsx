import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { FunctionComponent, useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../../assets/projects/projects";
import { ProjectFuntionalities } from "./ProjectFuntionalities";

type Props = {};

export const ProjectPage: FunctionComponent<Props> = ({}) => {
  const params = useParams();

  const project = projects[1];

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: 1200 }}>
        <div className="text-4xl border p-10 text-center">{project.name}</div>
        <div className="text-xl border p-10">{project.description}</div>
        <ul className="list-disc">
          <li>
            Now this is a story all about how, my life got flipped-turned upside
            down
          </li>
        </ul>
        <ProjectFuntionalities project={project} />
      </Box>
    </Box>
  );
};
