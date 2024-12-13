import { useContext } from "react";
import { LuLogIn } from "react-icons/lu";
import { LuWallet, LuLogOut } from "react-icons/lu";
import { useWallet } from "../Layout";

interface ConnectWalletProps {}

function ConnectWallet(props: ConnectWalletProps) {
  const wallet = useWallet();

  if (wallet && !wallet?.walletStatus) {
    return (
      <div
        className="flex items-center bg-[#000] text-white font-medium btn-font px-[15px] cursor-pointer rounded-[2.8px] hover-bg-grey"
        onClick={() => {
          wallet.setWalletStatus(true);
        }}
      >
        <LuLogIn size={20} className="" />
        <span className="ml-[5px] text-sm">Connect Wallet</span>
      </div>
    );
  } else if (wallet && wallet?.walletStatus) {
    return (
      <div className="flex items-center">
        <button
          type="button"
          className="focus-visible:ring-ring inline-flex justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 bg-secondary hover:bg-secondary/80 shadow-sm h-9 px-4 py-2 items-center gap-3 text-foreground"
        >
          <span className="sm:flex hidden gap-3">
            <LuWallet size={"20"} /> 0x293...516
          </span>
          <span className="flex items-center gap-2">
            <img
              src="https://imagedelivery.net/tLQGX6fO2lhA7EXY2jvPQQ/chain-1/public"
              className="border bg-muted logo svelte-54um2v"
              alt="Ethereum logo"
              title="Ethereum"
            />
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            wallet.setWalletStatus(false);
          }}
          className="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 gap-3 text-foreground"
        >
          <LuLogOut size={"20"} />
        </button>
      </div>
    );
  }
}

export default ConnectWallet;
