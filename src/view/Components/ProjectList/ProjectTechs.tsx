import React, { FunctionComponent } from "react";
import { Font2 } from "../../Styled/CustomFonts/Font2";

type Props = { techs?: string[] };

export const ProjectTechs: FunctionComponent<Props> = ({ techs }) => {
  return (
    <div>
      {/* <ProjectTechItem/> */}
      <Font2 size={14}>{techs && techs.join("   ")}</Font2>
    </div>
  );
};
