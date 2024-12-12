import { HiMiniChevronUpDown } from "react-icons/hi2";
import network from "../../tokendata/network";
import type { SearchData } from "./SearchBox";
import { getShortString } from "../../util/string";

interface SearchBoxInputProps {
  connectWalletStatus: boolean;
  //   selectType: "network" | "token";
  selectedId: number;
  changeDisplayStatus: Function;
  searchData: Array<SearchData>;
  tooltip: string;
}

function SearchBoxInput(props: SearchBoxInputProps) {
  if (props.connectWalletStatus) {
    return (
      <div
        className="flex border-border border bg-background rounded-[4.8px] relative bg-white"
        onClick={() => {
          props.changeDisplayStatus(true);
        }}
      >
        {props.selectedId !== -1 ? (
          <div className="flex justify-between w-full items-center px-[16px] py-[6px] hover:bg-[#f5f5f4] transition-colors duration-100">
            <div className="flex items-center">
              <img
                src={props.searchData[props.selectedId].imgUrl}
                alt={props.searchData[props.selectedId].name}
                width={24}
                height={24}
                className="border bg-muted logo svelte-54um2v"
              />
              <span className="text-sm ml-3 font-medium leading-5 text-[#302825]">
                {getShortString(props.searchData[props.selectedId].name)}
              </span>
            </div>
            <HiMiniChevronUpDown
              className="text-[#0c0a09] opacity-45"
              size={12}
            />
          </div>
        ) : (
          <div className="flex justify-between w-full items-center px-[16px] py-[6px] cursor-pointer hover:bg-[#f5f5f4] transition-colors duration-100">
            <div className="flex items-center">
              <img
                src={network[0].imgUrl}
                alt={network[0].name}
                width={24}
                height={24}
                className=" rounded-full invisible -ml-6"
              />
              <span
                className={`text-sm font-medium leading-5 ${
                  props.connectWalletStatus
                    ? "text-[#302825]"
                    : "text-[var(--secondary)]"
                }`}
              >
                {props.tooltip}
              </span>
            </div>

            <HiMiniChevronUpDown
              className="text-[#0c0a09] opacity-45"
              size={12}
            />
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
  } else if (!props.connectWalletStatus && props.selectedId === 0) {
    return (
      <div className="flex border-border border bg-background rounded-[4.8px] relative bg-white">
        <div className="flex justify-between w-full items-center px-[16px] py-[6px] opacity-60">
          <div className="flex items-center">
            <img
              src={props.searchData[props.selectedId].imgUrl}
              alt={props.searchData[props.selectedId].name}
              width={24}
              height={24}
              className="border bg-muted logo svelte-54um2v"
            />
            <span className="text-sm ml-3 font-medium leading-5 text-[#302825]">
              {getShortString(props.searchData[props.selectedId].name)}
            </span>
          </div>
          <HiMiniChevronUpDown
            className="text-[#0c0a09] opacity-45"
            size={12}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex border-border border bg-background rounded-[4.8px] relative bg-white">
        <div className="flex justify-between w-full items-center px-[16px] py-[6px] transition-colors duration-100">
          <div className="flex items-center">
            <img
              src={network[0].imgUrl}
              alt={network[0].name}
              width={24}
              height={24}
              className=" rounded-full invisible -ml-6"
            />
            <span className="text-sm font-medium leading-5 text-[var(--greydark1)] cursor-default">
              {props.tooltip}
            </span>
          </div>

          <HiMiniChevronUpDown
            className="text-[#0c0a09] opacity-45"
            size={12}
          />
        </div>
      </div>
    );
  }
}

export default SearchBoxInput;
