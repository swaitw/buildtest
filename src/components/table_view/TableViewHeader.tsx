import React from "react";
import { ReactComponent as SquareCheckedIcon } from "../icons/svg/squarechecked.svg";
import { ReactComponent as FilterIcon } from "../icons/svg/filter.svg";
const TableViewHeader = () => {
  return (
    <div className="bg-black flex justify-center text-white p-4 leading-5 font-bold relative ">
      <div className="justify-self-center flex items-center">
        <span>CLAIM 4</span>
        <span className="h-full border mx-8 border-gray-500"></span>
        <div className="flex items-center text-gray-500 gap-x-2">
          <SquareCheckedIcon />
          <span>ASSESS MODE</span>
        </div>
      </div>
      <div className="absolute right-8 h-full flex items-center top-0">
        <div className="border-gray-700 border rounded-lg p-1 bg-gray-700">
          <FilterIcon />
        </div>
      </div>
    </div>
  );
};

export default TableViewHeader;
