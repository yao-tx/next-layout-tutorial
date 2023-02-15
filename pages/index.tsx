import React from "react";
import { MyPage } from "components/common/types";

const HomePage: MyPage = () => {
  return (
    <div className="container text-center">
      <h1 className="text-5xl">
        Welcome!
      </h1>
    </div>
  );
};

export default HomePage;
HomePage.Layout = "Main";