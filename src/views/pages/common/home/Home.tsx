import React from "react";
import { DSlider } from "../../../components/custom/DSlider";
import { ProductsArray } from "../../../components/home/ProductsArray";

export const Home = () => {
  return (
    <main>
      <div className="container py-20" style={{ margin: "30px" }}>
        <DSlider />
      </div>
      <div className="container" style={{ margin: "30px" }}>
        <ProductsArray />
      </div>
    </main>
  );
};
