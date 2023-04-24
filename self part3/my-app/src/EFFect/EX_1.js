import React, { useEffect, useState } from "react";

const EX_1 = () => {
  const [close, setclose] = useState(false);
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log("normal function");

    console.log("we have to meet");
    return () => {
      console.log("clean up funaction");
    };
  }, [count]);
  return (
    <div>
      <button onClick={() => setclose(!close)}>send</button>
      <h1>{close ? "hii" : "hello"}</h1>

      <button
        onClick={() =>
          setcount((pre) => {
            return pre + 1;
          })
        }
      >
        send
      </button>

      {count}
    </div>
  );
};

export default EX_1;
