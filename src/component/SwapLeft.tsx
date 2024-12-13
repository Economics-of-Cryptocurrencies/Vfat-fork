import { useState } from "react";
import SearchBox from "./ui/SearchBox";
import network from "../tokendata/network";
import token from "../tokendata/token";
import Amount from "./ui/Amount";

function SwapLeft() {
  const [connectWalletStatus] = useState(true); // connect wallet status
  // const [networkStatus, setNetworkStatus] = useState(false); // network select status
  // const [tokenStatus, setTokenStatus] = useState(false); // token select status
  const [networkSelectedId, setNetworkSelectedId] = useState(-1);
  const [tokenSelectedId, setTokenSelectedId] = useState(-1);
  const [recieveTokenId, setReciveTokenId] = useState(0);
  const [slippage, setSlippage] = useState(0.1);
  return (
    <div className="bg-card text-card-foreground rounded-lg border shadow sm:min-w-[450px]">
      <div className="flex flex-col space-y-1.5 p-6">
        <h2 className="font-semibold leading-none tracking-tight text-[var(--greydark2)] opacity-80">
          Swap
        </h2>
        <p className="text-muted-foreground text-sm text-[var(--primary)]">
          Trade tokens using our DEX meta-aggregator.
        </p>
      </div>
      <div className="p-6 pt-0 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label
            data-melt-label=""
            data-label-root=""
            className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-80 text-[var(--greydark2)] opacity-80"
            htmlFor="network-combo-box-d17b311d-8c3d-4eb7-bb33-0d6a6b3e68ad"
            aria-disabled="false"
          >
            Network
          </label>
          <SearchBox
            connectWalletStatus={connectWalletStatus}
            selectedId={networkSelectedId}
            changeSelectId={setNetworkSelectedId}
            searchData={network}
            zIndex="z-30"
            tooltip1="Select a network..."
            tooltip2="Search network..."
            width={"288px"}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            data-melt-label=""
            data-label-root=""
            className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-80 text-[var(--greydark2)] opacity-80"
            htmlFor="network-combo-box-d17b311d-8c3d-4eb7-bb33-0d6a6b3e68sd"
            aria-disabled="false"
          >
            Token to send
          </label>
          <SearchBox
            connectWalletStatus={networkSelectedId !== -1}
            selectedId={tokenSelectedId}
            changeSelectId={setTokenSelectedId}
            searchData={token}
            zIndex="z-20"
            tooltip1="Select a token to send..."
            tooltip2="Search tokens..."
            width={"352px"}
            unchecked={true}
          />
        </div>
        <Amount connectStatus={connectWalletStatus} />
        <div className="flex flex-col gap-2">
          <label
            data-melt-label=""
            data-label-root=""
            className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-80 text-[var(--greydark2)] opacity-80"
            htmlFor="network-combo-box-d17b311d-8c3d-4eb7-bb33-0d6a6b3e68ad"
            aria-disabled="false"
          >
            Token to recieve
          </label>
          <SearchBox
            connectWalletStatus={networkSelectedId !== -1}
            selectedId={recieveTokenId}
            changeSelectId={setReciveTokenId}
            searchData={token}
            zIndex="z-10"
            tooltip1="Select a token to recieve"
            tooltip2="Search tokens..."
            width={"352px"}
            unchecked={true}
            notbalance={true}
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-center">
            <label
              data-melt-label=""
              data-label-root=""
              className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-80 text-xs text-[var(--greydark2)] opacity-80"
              htmlFor="slippage-input-874008ba-1c52-45a5-99e8-cc97b5d685e1"
            >
              Slippage (%)
            </label>
            <button
              aria-describedby="D41tC1pB4m"
              id="NP7EJ4tbko"
              data-state="closed"
              data-melt-tooltip-trigger=""
              data-tooltip-trigger=""
              type="button"
            >
              <div className="text-muted-foreground flex text-xs items-center gap-2 text-[var(--primary)]">
                What is this?
              </div>
            </button>
          </div>
          <div className="flex gap-2">
            <div className="flex w-full">
              <div className="border-input flex h-9 border bg-background text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium has-[:focus]:ring-ring has-[:focus]:ring-1 w-full min-w-0 rounded-[2.8px]">
                <input
                  className="input w-full px-3 py-1 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none"
                  min="0"
                  max="100"
                  step="0.1"
                  type="number"
                  defaultValue={slippage}
                  disabled={!connectWalletStatus}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                tabIndex={0}
                className="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 border-input bg-background hover:bg-accent hover:text-accent-foreground border shadow-sm h-9 w-9 text-muted-foreground text-[var(--primary)] rounded-[2.8px] hover:bg-[var(--hovercolor1)]"
                data-button-root=""
                onClick={() => {
                  setSlippage(0.1);
                }}
                disabled={!connectWalletStatus}
              >
                0.1
              </button>
              <button
                type="button"
                tabIndex={0}
                className="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 border-input bg-background hover:bg-accent hover:text-accent-foreground border shadow-sm h-9 w-9 text-muted-foreground text-[var(--primary)] rounded-[2.8px] hover:bg-[var(--hovercolor1)]"
                data-button-root=""
                onClick={() => {
                  setSlippage(0.5);
                }}
                disabled={!connectWalletStatus}
              >
                0.5
              </button>
              <button
                type="button"
                tabIndex={0}
                className="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 border-input bg-background hover:bg-accent hover:text-accent-foreground border shadow-sm h-9 w-9 text-muted-foreground text-[var(--primary)] rounded-[2.8px] hover:bg-[var(--hovercolor1)]"
                data-button-root=""
                onClick={() => {
                  setSlippage(1);
                }}
                disabled={!connectWalletStatus}
              >
                1
              </button>
              <button
                type="button"
                tabIndex={0}
                className="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 border-input bg-background hover:bg-accent hover:text-accent-foreground border shadow-sm h-9 w-9 text-muted-foreground text-[var(--primary)] rounded-[2.8px] hover:bg-[var(--hovercolor1)]"
                data-button-root=""
                onClick={() => {
                  setSlippage(3);
                }}
                disabled={!connectWalletStatus}
              >
                3
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div className="flex items-center p-6 pt-0">
        <button
          type="button"
          tabIndex={0}
          className="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-[2.8px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 shadow h-9 px-4 py-2 gap-3 bg-[var(--greydark)] text-[var(--greywhite)] cursor-default"
          style={{
            width: "100%",
            maxWidth: "unset",
            maxHeight: "48px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide-icon lucide"
          >
            <path d="M6 10V5c0-1.7 1.3-3 3-3h1" key="13af7h"></path>
            <path d="m3 7 3 3 3-3" key="x25e72"></path>
            <circle cx="18" cy="6" r="4" key="14r987"></circle>
            <path d="M18 14v5c0 1.7-1.3 3-3 3h-1" key="1ogxox"></path>
            <path d="m21 17-3-3-3 3" key="1m4qyr"></path>
            <circle cx="6" cy="18" r="4" key="jn0mx"></circle>
          </svg>{" "}
          Swap
        </button>
      </div>
    </div>
  );
}

export default SwapLeft;
