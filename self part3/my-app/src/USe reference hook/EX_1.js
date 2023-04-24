import React, { useRef } from "react";

const EX_1 = () => {
  let r = useRef(null);
  const Handlick = (e) => {
    e.preventDefault();
    console.log(r.current.value);
  };

  return (
    <>
      <input type="text" ref={r} />
      <h1>{r.current}</h1>
      <button onClick={Handlick}>Submit</button>
    </>
  );
};

export default EX_1;
