import React from "react";
import { Header } from "./common/Header";
import Main from "./common/Main";

const TheLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Main />
      </main>
    </div>
  );
};

export default TheLayout;
