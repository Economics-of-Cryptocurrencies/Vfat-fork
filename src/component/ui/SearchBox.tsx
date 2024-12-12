import React, { ReactNode, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxCheck } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import network from "../../tokendata/network";
import SearchBoxInput from "./SearchBoxInput";
import SearchBoxContent from "./SearchBoxContent";

export interface SearchData {
  name: string;
  imgUrl: string;
}

interface SearchBoxProps {
  connectWalletStatus: boolean;
  selectedId: number;
  changeSelectId: Function;
  searchData: Array<SearchData>;
  zIndex: string;
}

function SearchBox(props: SearchBoxProps) {
  const [seachBoxContentDisplay, setSeachBoxContentDisplay] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: any) => {
    if (elementRef.current && !elementRef.current.contains(event.target)) {
      setSeachBoxContentDisplay(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${props.zIndex}`} ref={elementRef}>
      <SearchBoxInput
        connectWalletStatus={props.connectWalletStatus}
        selectedId={props.selectedId}
        changeDisplayStatus={setSeachBoxContentDisplay}
        searchData={props.searchData}
      />
      <SearchBoxContent
        displayStatus={seachBoxContentDisplay}
        selectedId={props.selectedId}
        changeSelectId={props.changeSelectId}
        changeDisplayStatus={setSeachBoxContentDisplay}
        searchData={props.searchData}
      />
    </div>
  );
}

export default SearchBox;
