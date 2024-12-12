import { RxCheck } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { SearchData } from "./SearchBox";

interface SearchBoxContentProps {
  displayStatus: boolean;
  selectedId: number;
  changeSelectId: Function;
  changeDisplayStatus: Function;
  searchData: Array<SearchData>;
  tooltip: string;
  width: string;
}

function SearchBoxContent(props: SearchBoxContentProps) {
  return (
    <div
      className={`flex flex-col border shadow-md border-[#e7e5e4] rounded-[2.8px] w-[${
        props.width
      }] absolute inset-x-2/4	-translate-x-1/2 top-10 ${
        props.displayStatus ? "" : "hidden"
      }`}
    >
      <div className="flex items-center pl-[12px] pr-[12px] border-b-[1px] bg-white">
        <IoIosSearch size={18} className="text-[var(--primary)]" />
        <input
          type="text"
          className="text-sm ml-2 leading-3 py-3 focus:border-hidden focus:outline-hidden w-full focus-visible:outline-none h-9 custom-font-1"
          placeholder={props.tooltip}
        />
      </div>
      <div className="flex flex-col h-[296px] px-[5px] py-[5px] bg-white">
        <div className="flex flex-col overflow-y-scroll pr-[3px] custom-scroll-1">
          {props.searchData.map((ntk, idx) => (
            <div
              key={idx}
              className="flex justify-between leading-[40px] pl-[12px] pr-[12px] cursor-default hover:bg-[#f5f5f4]"
              onClick={() => {
                props.changeSelectId(idx);
                props.changeDisplayStatus(false);
              }}
            >
              <div className="flex items-center">
                <RxCheck
                  size={16}
                  className={`font-bold text-sm text-black ${
                    idx === props.selectedId ? "" : " invisible"
                  }`}
                />
                <img
                  src={ntk.imgUrl}
                  alt={ntk.name}
                  className="ml-[9px] border bg-muted logo svelte-54um2v"
                  width={24}
                  height={24}
                />
                <span className="ml-[15px] text-sm text-[#1c1917]">
                  {ntk.name}
                </span>
              </div>
              <span className="text-[var(--primary)]">0</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBoxContent;
