import React, { useEffect, useRef, useState } from "react";

const EX_3 = () => {
  const [open, setopen] = useState("");
  let r = useRef(1);
  useEffect(() => {
    r.current = r.current + 1;
  });
  //   const h = () => {
  //     r.current = r.current + 1;
  //   };
  return (
    <div>
      <input type="text" onChange={(e) => setopen(e.target.value)} />
      <h1>{r.current}</h1>
      {/* <button onClick={h}>add</button> */}
    </div>
  );
};

export default EX_3;
