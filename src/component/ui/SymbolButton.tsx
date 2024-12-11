import React, { ReactNode } from "react";

interface SymbolButtonProps {
  symbol: ReactNode;
  content: string;
}

function SymbolButton(props: SymbolButtonProps) {
  return (
    <div className="flex items-center py-[8px] pl-[16px] pr-[12px] cursor-pointer text-[#78716c] hover:bg-[#f5f5f4] hover:text-[#1c1917]">
      {props.symbol}
      <span className="pl-[5px] text-[14px] font-medium">{props.content}</span>
    </div>
  );
}

export default SymbolButton;
