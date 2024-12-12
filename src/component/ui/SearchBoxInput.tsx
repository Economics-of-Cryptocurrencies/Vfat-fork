import React, { ReactNode } from "react";
import { LuCheck } from "react-icons/lu";
import { RiExpandUpDownLine } from "react-icons/ri";
import network from "../../tokendata/network";
import type { SearchData } from "./SearchBox";

interface SearchBoxInputProps {
  connectWalletStatus: boolean;
  //   selectType: "network" | "token";
  selectedId: number;
  changeDisplayStatus: Function;
  searchData: Array<SearchData>;
}

function SearchBoxInput(props: SearchBoxInputProps) {
  return (
    <div
      className="flex border-border border bg-background rounded-[4.8px] relative bg-white"
      onClick={() => {
        props.changeDisplayStatus(true);
      }}
    >
      {props.selectedId !== -1 ? (
        <div className="flex justify-between w-full items-center px-[16px] py-[8px] cursor-pointer hover:bg-[#f5f5f4] transition-colors duration-100">
          <div className="flex items-center">
            <img
              src={props.searchData[props.selectedId].imgUrl}
              alt={props.searchData[props.selectedId].name}
              width={24}
              height={24}
              className=" rounded-full"
            />
            <span className="text-sm ml-3 font-medium leading-5 text-[#302825]">
              {props.searchData[props.selectedId].name}
            </span>
          </div>
          <RiExpandUpDownLine className="text-[#0c0a09] opacity-45" size={12} />
        </div>
      ) : (
        <div className="flex justify-between w-full items-center px-[16px] py-[8px] cursor-pointer hover:bg-[#f5f5f4] transition-colors duration-100">
          <div className="flex items-center">
            <img
              src={network[0].imgUrl}
              alt={network[0].name}
              width={24}
              height={24}
              className=" rounded-full invisible"
            />
            <span
              className={`text-sm font-medium leading-5 ${
                props.connectWalletStatus
                  ? "text-[#302825]"
                  : "text-[var(--secondary)]"
              }`}
            >
              Select a network...
            </span>
          </div>

          <RiExpandUpDownLine className="text-[#0c0a09] opacity-45" size={12} />
        </div>
      )}

      {/* <select>
        <option value="ethereum">
          <img src="https://imagedelivery.net/tLQGX6fO2lhA7EXY2jvPQQ/chain-56/public" />
          <span>ethereum</span>
          <span>0</span>
        </option>
      </select> */}
    </div>
  );
}

export default SearchBoxInput;
