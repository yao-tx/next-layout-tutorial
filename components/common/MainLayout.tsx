import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";

const MainLayout = ({ children }: PropsWithChildren) => {
  return(
    <>
      <Navbar />
      <main className="h-screen flex flex-col items-center justify-center">{children}</main>
    </>
  );
};

export default MainLayout;