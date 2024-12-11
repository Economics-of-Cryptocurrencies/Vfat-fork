import React, { ReactNode } from "react";
import { LuLogIn } from "react-icons/lu";

interface ConnectWalletProps {
  connectStatus: boolean;
}

function ConnectWallet(props: ConnectWalletProps) {
  if (props.connectStatus) {
    return (
      <div className="flex items-center bg-[#000] text-white font-medium btn-font px-[15px] cursor-pointer rounded-[2.8px] hover-bg-grey">
        <LuLogIn size={20} className="" />
        <span className="ml-[5px]">Connect Wallet</span>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default ConnectWallet;
