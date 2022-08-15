import React, { FunctionComponent } from "react";
import { Tech } from "../../../domain/Type";
import { Font2 } from "../../Styled/CustomFonts/Font2";

type Props = { tech: Tech };

export const ProjectTechItem: FunctionComponent<Props> = ({ tech }) => {
  return (
    <span className="m-1">
      <Font2 size={14}>{tech.name}</Font2>
    </span>
  );
};
