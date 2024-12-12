import { useState } from "react";
import SearchBox from "./ui/SearchBox";
import network from "../tokendata/network";
import token from "../tokendata/token";
import Amount from "./ui/Amount";

function SwapLeft() {
  const [networkSelectedId, setNetworkSelectedId] = useState(-1);
  const [tokenSelectedId, setTokenSelectedId] = useState(-1);
  return (
    <div className="bg-card text-card-foreground rounded-lg border shadow sm:min-w-[450px]">
      <div className="flex flex-col space-y-1.5 p-6">
        <h2 className="font-semibold leading-none tracking-tight">Swap</h2>
        <p className="text-muted-foreground text-sm">
          Trade tokens using our DEX meta-aggregator.
        </p>
      </div>
      <div className="p-6 pt-0 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label
            data-melt-label=""
            data-label-root=""
            className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="network-combo-box-d17b311d-8c3d-4eb7-bb33-0d6a6b3e68ad"
            aria-disabled="false"
          >
            Network
          </label>
          <SearchBox
            connectWalletStatus={true}
            selectedId={networkSelectedId}
            changeSelectId={setNetworkSelectedId}
            searchData={network}
            zIndex="z-20"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            data-melt-label=""
            data-label-root=""
            className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="network-combo-box-d17b311d-8c3d-4eb7-bb33-0d6a6b3e68sd"
            aria-disabled="false"
          >
            Token to send
          </label>
          <SearchBox
            connectWalletStatus={true}
            selectedId={tokenSelectedId}
            changeSelectId={setTokenSelectedId}
            searchData={token}
            zIndex="z-10"
          />
        </div>
        <Amount connectStatus={true} />
        <div className="flex flex-col gap-2">
          <label
            data-melt-label=""
            data-label-root=""
            className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="network-combo-box-d17b311d-8c3d-4eb7-bb33-0d6a6b3e68ad"
            aria-disabled="false"
          >
            Token to recieve
          </label>
          <div className="flex border-border border bg-background rounded-lg relative">
            token
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-center">
            <label
              data-melt-label=""
              data-label-root=""
              className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-xs"
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
              <div className="text-muted-foreground flex text-xs items-center gap-2">
                What is this?
              </div>
            </button>
          </div>
          <div className="flex gap-2">
            <div className="flex w-full">
              <div className="border-input flex h-9 rounded-md border bg-background text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium has-[:focus]:ring-ring has-[:focus]:ring-1 w-full min-w-0 svelte-r7117t">
                <input
                  className="input w-full placeholder:text-muted-foreground focus-visible:outline-none bg-transparent px-3 py-1 disabled:cursor-not-allowed disabled:opacity-50 svelte-r7117t"
                  id="slippage-input-874008ba-1c52-45a5-99e8-cc97b5d685e1"
                  min="0"
                  max="100"
                  step="0.1"
                  type="number"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                tabIndex={0}
                className="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 border-input bg-background hover:bg-accent hover:text-accent-foreground border shadow-sm h-9 w-9 text-muted-foreground"
                data-button-root=""
              >
                0.1
              </button>
              <button
                type="button"
                tabIndex={0}
                className="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 border-input bg-background hover:bg-accent hover:text-accent-foreground border shadow-sm h-9 w-9 text-muted-foreground"
                data-button-root=""
              >
                0.5
              </button>
              <button
                type="button"
                tabIndex={0}
                className="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 border-input bg-background hover:bg-accent hover:text-accent-foreground border shadow-sm h-9 w-9 text-muted-foreground"
                data-button-root=""
              >
                1
              </button>
              <button
                type="button"
                tabIndex={0}
                className="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 border-input bg-background hover:bg-accent hover:text-accent-foreground border shadow-sm h-9 w-9 text-muted-foreground"
                data-button-root=""
              >
                3
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center p-6 pt-0">
        <button
          type="button"
          tabIndex={0}
          className="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 shadow h-9 px-4 py-2 gap-3"
          disabled={false}
          data-button-root=""
          style={{
            width: "100%",
            maxWidth: "unset",
            maxHeight: "48px",
          }}
        >
          Swap
        </button>
      </div>
    </div>
  );
}

export default SwapLeft;
