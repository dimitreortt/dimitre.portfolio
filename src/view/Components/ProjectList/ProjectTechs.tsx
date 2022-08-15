import React, { FunctionComponent } from "react";
import { Tech } from "../../../domain/Type";
import { Font2 } from "../../Styled/CustomFonts/Font2";
import { ProjectTechItem } from "./ProjectTechItem";

type Props = { techs?: Tech[] };

export const ProjectTechs: FunctionComponent<Props> = ({ techs }) => {
  return (
    <div className=" border border-black">
      oi
      {/* <ProjectTechItem/> */}
      {techs && techs.map((tech) => <ProjectTechItem tech={tech} />)}
      {/* <Font2 size={14}>{techs && techs.join("   ")}</Font2> */}
    </div>
  );
};
