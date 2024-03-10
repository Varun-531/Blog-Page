import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

function layout() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default layout;
