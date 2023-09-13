import React, { useState } from "react";

export default function ProductQty() {
  const [count, setCount] = useState(1);
  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="flex gap-10 border w-[136.92px] px-4 py-1 ">
      <button
        className="hover:cursor-pointer text-[16px] w-2/5"
        onClick={handleSubtract}
      >
        -
      </button>{" "}
      {count}{" "}
      <button className="hover:cursor-pointer w-2/5" onClick={handleAdd}>
        +
      </button>
    </div>
  );
}
