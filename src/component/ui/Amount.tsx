import { useState } from "react";
import token from "../../tokendata/token";
interface AmountProps {
  connectStatus: boolean;
  tokenSelectedId: number;
}

function Amount(props: AmountProps) {
  let value1 = token[props.tokenSelectedId]?.value1 || 0;
  let value2 = token[props.tokenSelectedId]?.value2 || 0;

  const [amount, setAmount] = useState("0");
  const [value, setValue] = useState(0);
  const [percent, setPercent] = useState(0);

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
            <span className="ml-[5px]">{value2}</span>
            <label>Balance: </label>
          </div>
        </div>
        <div className="flex justify-between">
          <input
            className="border leading-7 focus-visible:outline-[1px] text-sm w-[325px] border-[#e7e5e4] px-[12px] py-[4px] rounded-[2.88px]"
            type="text"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            placeholder="Choose amount"
          />
          <button
            type="button"
            className="text-[var(--primary)] text-[14px] w-[68px] font-semibold border border-[#e7e5e4] rounded-[2.88px] hover:bg-[var(--hovercolor1)]"
            onClick={() => {
              setAmount(value2.toString());
              setValue(value1);
              setPercent(100);
            }}
          >
            MAX
          </button>
        </div>
        <div className="flex px-1 mt-1">
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={percent}
            onChange={(e) => {
              setAmount(((value2 / 100) * parseInt(e.target.value)).toString());
              setValue((value1 / 100) * parseInt(e.target.value));
              setPercent(parseInt(e.target.value));
            }}
            className="w-full custom-range-1 h-[6px] bg-gray-100 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
        </div>
        <div className="flex justify-between  text-xs">
          <div>
            {"$" +
              value.toFixed(2) +
              " @ 1 " +
              token[props.tokenSelectedId].name +
              " = $" +
              token[props.tokenSelectedId].price}
          </div>
          <div>
            <span>{percent}%</span>
          </div>
        </div>
      </div>
    );
  } else {
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
            className="border w-[325px] disabled:bg-white border-[#e7e5e4] px-[12px] py-[4px] rounded-[2.88px] cursor-not-allowed"
            type="text"
            placeholder="0"
            disabled={true}
          />
          <button
            type="button"
            className="text-[#d1cfce] text-[14px] w-[68px] font-semibold border border-[#e7e5e4] rounded-[2.88px] cursor-default hover:bg-[]"
          >
            MAX
          </button>
        </div>
        <div className="flex px-1 mt-1">
          <input
            type="range"
            defaultValue="0"
            className="w-full custom-range-1 h-[6px] bg-gray-100 rounded-lg appearance-none dark:bg-gray-700"
            disabled={true}
          />
        </div>
        <div className="flex justify-between text-[var(--primary)] text-xs">
          <div></div>
          <div>
            <span>0%</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Amount;
