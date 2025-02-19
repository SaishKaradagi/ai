import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="w-full">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default PublicLayout;
