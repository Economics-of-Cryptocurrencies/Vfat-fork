interface AmountProps {
  connectStatus: boolean;
}

function Amount(props: AmountProps) {
  if (props.connectStatus) {
    return (
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between items-center w-full">
          <label
            data-melt-label=""
            data-label-root=""
            className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="network-combo-box-d17b311d-8c3d-4eb7-bb33-0d6a6b3e68ad"
            aria-disabled="false"
          >
            Amount
          </label>
          <div className="flex flex-row-reverse text-xs text-[var(--primary)] items-center mr-1">
            <span className="ml-[5px]">0</span>
            <label>Balance: </label>
          </div>
        </div>
        <div className="flex justify-between">
          <input
            className="border focus-visible:outline-none w-[325px] border-[#e7e5e4] px-[12px] py-[4px] rounded-[2.88px]"
            type="text"
            placeholder="0"
          />
          <button
            type="button"
            className="text-[#d1cfce] text-[14px] w-[68px] font-semibold border border-[#e7e5e4] rounded-[2.88px]"
          >
            MAX
          </button>
        </div>
        <div className="flex px-1 mt-1">
          <input
            type="range"
            value="0"
            className="w-full custom-range-1 h-[6px] bg-gray-100 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Amount;
