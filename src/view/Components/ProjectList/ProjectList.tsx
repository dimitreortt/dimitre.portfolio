import React, { FunctionComponent } from "react";
import { list } from "./list";
import { ProjectListItem } from "./ProjectListItem";

type Props = {};

export const ProjectList: FunctionComponent<Props> = ({}) => {
  return (
    <div>
      {list.map((p) => (
        <ProjectListItem project={p}></ProjectListItem>
      ))}
    </div>
  );
};
