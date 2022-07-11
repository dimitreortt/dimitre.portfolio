import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatedPage } from "./view/Pages/AnimatedPage";
import { HomePage } from "./view/Pages/HomePage/HomePage";

function App() {
  // const location = useLocation();

  return (
    <AnimatePresence>
      <BrowserRouter>
        <Routes>
          <Route path="/animated" element={<AnimatedPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
