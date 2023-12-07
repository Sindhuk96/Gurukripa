import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const OurSystem = React.lazy(() => import("pages/OurSystem"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<OurSystem />} />
          <Route path="*" element={<NotFound />} />          
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
