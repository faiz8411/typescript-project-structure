import React from "react";
import logo from "../../../assets/images/3ae67ef5-e5f6-42c3-9a40-993ef9a7bfae.png";
export const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between ">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex my-auto">
          <input
            type="text"
            className="p-2 w-full bg-zinc-200 border-green-200"
          />
          <button className="p-2 bg-gray-200 text-orange-400">search</button>
        </div>
      </div>
    </div>
  );
};
