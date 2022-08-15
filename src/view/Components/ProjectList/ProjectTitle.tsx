import React, { FunctionComponent } from "react";
import { Font1 } from "../../Styled/CustomFonts/Font1";
import { Font2 } from "../../Styled/CustomFonts/Font2";

type Props = { title: string };

export const ContentRight = ({ children }: any) => {
  return (
    <div className="border flex ">
      <div className="ml-auto">{children}</div>
    </div>
  );
};

export const ProjectTitle: FunctionComponent<Props> = ({ title }) => {
  return (
    <div>
      <ContentRight>
        <Font2 size={14} fontWeight={1000} color={"secondary.main"}>
          Featured Project
        </Font2>
      </ContentRight>
      <ContentRight>
        <Font1 size={30} fontWeight={1000} color={""}>
          {title}
        </Font1>
      </ContentRight>
    </div>
  );
};
