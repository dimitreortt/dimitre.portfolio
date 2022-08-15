import React, { FunctionComponent } from "react";
import { Font1 } from "../../Styled/CustomFonts/Font1";

type Props = { description: string };

export const ProjectDescription: FunctionComponent<Props> = ({
  description,
}) => {
  return (
    <div className="float-right text-right">
      <Font1>{description}</Font1>
    </div>
  );
};
