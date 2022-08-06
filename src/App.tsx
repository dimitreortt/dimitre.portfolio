import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatedPage } from "./view/Pages/AnimatedPage";
import { HomePage } from "./view/Pages/HomePage/HomePage";
import { ResumePage } from "./view/Pages/HomePage/ResumePage";
import { ProjectPage } from "./view/Pages/ProjectPage/ProjectPage";
import { TestPage } from "./view/Pages/TestPage/TestPage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/animated" element={<AnimatedPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;
