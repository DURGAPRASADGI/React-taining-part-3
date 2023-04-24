import React from "react";
import { useEX } from "./useEX";

const EX_1 = () => {
  const [sin,cos] = useEX('DURGA')
  return (
    <>
      <input type="text" value={sin} onChange={cos} />
      <h1>{sin}</h1>
      
    </>
  );
};

export default EX_1;
