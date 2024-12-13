import { useRef, useEffect, useState } from "react";
import SearchBoxInput from "./SearchBoxInput";
import SearchBoxContent from "./SearchBoxContent";

export interface SearchData {
  name: string;
  imgUrl: string;
  value1?: number;
  value2?: number;
  price?: string;
}

interface SearchBoxProps {
  connectWalletStatus: boolean;
  tooltip1: string;
  tooltip2: string;
  selectedId: number;
  changeSelectId: Function;
  searchData: Array<SearchData>;
  zIndex: string;
  width: string;
  unchecked?: boolean;
  notbalance?: boolean;
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
        tooltip={props.tooltip1}
      />
      <SearchBoxContent
        displayStatus={seachBoxContentDisplay}
        selectedId={props.selectedId}
        changeSelectId={props.changeSelectId}
        changeDisplayStatus={setSeachBoxContentDisplay}
        searchData={props.searchData}
        tooltip={props.tooltip2}
        width={props.width}
        unchecked={props.unchecked}
        notbalance={props.notbalance}
      />
    </div>
  );
}

export default SearchBox;
