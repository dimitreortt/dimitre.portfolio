import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { FunctionComponent, useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../../assets/projects/projects";
import { ProjectFuntionalities } from "./ProjectFuntionalities";

type Props = {};

export const ProjectPage: FunctionComponent<Props> = ({}) => {
  const params = useParams();

  const project = projects[0];

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: 1200 }}>
        <div className="text-4xl border p-10 text-center">Project Title</div>
        <div className="text-xl border p-10">
          Mauris dapibus vestibulum urna id fermentum. Proin ultrices ultricies
          lacinia. Nullam sem erat, convallis eget finibus vel, elementum
          rhoncus orci. Mauris ut felis a magna lacinia aliquet. Mauris non
          pulvinar nisi. Curabitur vehicula rutrum maximus. Donec sit amet dui
          eu mauris laoreet lacinia. Ut ac tristique elit. Proin eros risus,
          varius nec volutpat a, mattis et diam. Quisque suscipit tincidunt
          dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
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
