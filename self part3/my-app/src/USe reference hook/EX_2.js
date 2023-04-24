import React, { useRef } from "react";

const EX_2 = () => {
  let y = useRef(0);
  const h = () => {
    y.current = y.current + 1;
  };
  return (
    <div>
      {y.current}
      <button onClick={h}>click</button>
    </div>
  );
};

export default EX_2;
