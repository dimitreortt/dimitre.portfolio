import reactLogoRef from "./logos/reactlogo.png";
import muiLogoRef from "./logos/muilogo.png";
import fbLogoRef from "./logos/fblogo.png";
import jsLogoRef from "./logos/jslogo.png";
import reduxLogoRef from "./logos/reduxlogo.png";
import tsLogoRef from "./logos/tslogo.png";
import jestLogoRef from "./logos/jestlogo.jpg";
import nodeLogoRef from "./logos/nodelogo.jpg";
import rtlLogoRef from "./logos/rtllogo.png";
import cssLogoRef from "./logos/csslogo.png";

export const logosRefs = () => {
  return [
    { logoRef: jsLogoRef, link: "https://www.javascript.com/" },
    { logoRef: tsLogoRef, link: "https://www.typescriptlang.org/" },
    {
      logoRef: cssLogoRef,
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    { logoRef: reactLogoRef, link: "https://reactjs.org/" },
    { logoRef: reduxLogoRef, link: "https://redux-toolkit.js.org/" },
    { logoRef: nodeLogoRef, link: "https://nodejs.org/en/" },
    { logoRef: jestLogoRef, link: "https://jestjs.io/" },
    { logoRef: fbLogoRef, link: "https://firebase.google.com/" },
    { logoRef: muiLogoRef, link: "https://mui.com/" },
    { logoRef: rtlLogoRef, link: "https://testing-library.com/" },
  ];
};
