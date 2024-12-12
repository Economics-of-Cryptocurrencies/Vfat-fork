import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface SymbolButtonProps {
  active: boolean;
  symbol: ReactNode;
  content: string;
  to: string;
}

function SymbolButton(props: SymbolButtonProps) {
  return (
    <Link
      to={props.to}
      className={`flex items-center py-[8px] pl-[16px] pr-[12px] cursor-pointer hover:bg-[#f5f5f4] hover:text-[#1c1917] ${
        props.active ? "text-[#1c1917]" : "text-[#78716c]"
      }`}
    >
      {props.symbol}
      <span className="pl-[5px] text-[14px] font-medium">{props.content}</span>
    </Link>
  );
}

export default SymbolButton;
