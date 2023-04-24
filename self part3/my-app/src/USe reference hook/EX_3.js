import React, { useState } from "react";

const EX_3 = () => {
  const [starttime, setstarttime] = useState(null);
  const [now, setnow] = useState(null);
  const [stop, setstop] = useState(null);
  const h = () => {
    setstarttime(Date.now());
    setnow(Date.now());
    setstop(
      setInterval(() => {
        setnow(Date.now());
      }, 1000)
    );
  };
  let s = 0;
  if (starttime !== null && now !== null) {
    s = (now - starttime) / 1000;
  }
  const h1 = () => {
    clearInterval(stop);
  };
  return (
    <>
      time :{s}
      starttime:{starttime}
      now:{now}
      <button onClick={h}>start</button>
      <button onClick={h1}>stop</button>
    </>
  );
};

export default EX_3;
