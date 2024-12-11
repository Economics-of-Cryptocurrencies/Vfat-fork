import {
  LuBriefcaseBusiness,
  LuBird,
  LuSettings2,
  LuMoon,
  LuLogIn,
} from "react-icons/lu";
import ConnectWallet from "./ui/ConnectWallet";
import SymbolButton from "./ui/SymbolButton";

function Header() {
  return (
    <header className="flex justify-between border bottom-1 border-[#e7e5e4] items-center">
      <div className="flex">
        <div className="logo px-[8px] py-[8px]">
          <LuBird size={"32"} />
        </div>
        <div className="flex">
          <SymbolButton
            symbol={<LuBriefcaseBusiness size={"20"} />}
            content="Portfolio"
          />
          <SymbolButton
            symbol={<LuBriefcaseBusiness size={"20"} />}
            content="Yield"
          />
          <SymbolButton
            symbol={<LuBriefcaseBusiness size={"20"} />}
            content="Swap"
          />
          <SymbolButton
            symbol={<LuBriefcaseBusiness size={"20"} />}
            content="Tokens"
          />
          <SymbolButton
            symbol={<LuBriefcaseBusiness size={"20"} />}
            content="Lending"
          />
          <SymbolButton
            symbol={<LuBriefcaseBusiness size={"20"} />}
            content="States"
          />
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <button className="text-[#78716c] ml-[10px] mr-5 hover:bg-[#f5f5f4] text-[#0c0a09] px-[8px] py-[8px]">
          <LuMoon size={"20"} />
        </button>
        <button className="text-[#78716c] ml-[10px] hover:bg-[#f5f5f4] text-[#0c0a09] px-[8px] py-[8px]">
          <LuSettings2 size={"20"} />
        </button>
        <ConnectWallet connectStatus={true} />
      </div>
    </header>
  );
}

export default Header;
