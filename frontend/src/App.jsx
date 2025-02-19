// import { useState } from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Roadmap from "./pages/RoadmapLayout";
import Home from "./pages/Home";

import PublicLayout from "./layouts/public-layout";

import AuthLayout from "./layouts/AuthLayout";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProctedRoutes from "./layouts/ProctedRoutes";
import MainLayout from "./layouts/MainLayout";
import RoadmapLayout from "./pages/RoadmapLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />}></Route>
          <Route path="/roadmap" element={<Roadmap />}></Route> */}
          {/* public routers */}
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
          </Route>

          {/* authentication layout */}
          <Route element={<AuthLayout />}>
            <Route path="/signin/*" element={<SignInPage />} />
            <Route path="/signup/*" element={<SignUpPage />} />
          </Route>

          {/* protected routers */}
          <Route
            element={
              <ProctedRoutes>
                <MainLayout />
              </ProctedRoutes>
            }
          >
            {/* add all protected routes */}
            <Route path="/roadmap"  element={<RoadmapLayout />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
