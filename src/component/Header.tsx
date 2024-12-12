import {
  LuBriefcaseBusiness,
  LuBird,
  LuSettings2,
  LuMoon,
} from "react-icons/lu";
import ConnectWallet from "./ui/ConnectWallet";
import SymbolButton from "./ui/SymbolButton";

function Header() {
  return (
    <header className="flex h-[48px] justify-between border bottom-1 border-[#e7e5e4] items-center fixed left-0 top-0 w-full bg-white">
      <div className="flex">
        <div className="logo px-[8px] py-[8px]">
          <LuBird size={"32"} />
        </div>
        <div className="flex">
          <SymbolButton
            symbol={<LuBriefcaseBusiness size={"20"} />}
            content="Portfolio"
            to="/portfolio"
          />
          <SymbolButton
            symbol={<LuBriefcaseBusiness size={"20"} />}
            content="Yield"
            to="/yield"
          />
          <SymbolButton
            symbol={<LuBriefcaseBusiness size={"20"} />}
            content="Swap"
            to="/swap"
          />
          <SymbolButton
            symbol={<LuBriefcaseBusiness size={"20"} />}
            content="Tokens"
            to="/tokens"
          />
          <SymbolButton
            symbol={<LuBriefcaseBusiness size={"20"} />}
            content="Lending"
            to="/lending-markets"
          />
          <SymbolButton
            symbol={<LuBriefcaseBusiness size={"20"} />}
            content="Stats"
            to="/stats"
          />
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <button className="text-[#78716c] ml-[10px] mr-5 hover:bg-[#f5f5f4] px-[8px] py-[8px]">
          <LuMoon size={"20"} />
        </button>
        <button className="text-[#78716c] ml-[10px] hover:bg-[#f5f5f4] px-[8px] py-[8px]">
          <LuSettings2 size={"20"} />
        </button>
        <ConnectWallet connectStatus={true} />
      </div>
    </header>
  );
}

export default Header;
