import { Box } from "@mui/system";
import React, { FunctionComponent } from "react";
import { Project } from "../../../domain/Type";

type Props = { project: Project };

export const ProjectListItem: FunctionComponent<Props> = ({ project }) => {
  return (
    <Box sx={{ p: 1, m: 1, border: "1px solid black" }}>ProjectListItem</Box>
  );
};
