import React, { useEffect, useState } from "react";

const EX_1 = () => {
  const [move, setmove] = useState({
    x: 0,
    y: 0,
  });
  const [close, setclose] = useState(true);
  useEffect(() => {
    const handclick = (e) => {
      if (close) {
        setmove((pre) => {
          return { ...pre, x: e.clientX, y: e.clientY };
          
        });
    
      }
    };

    window.addEventListener("pointermove", handclick);
    return () => {
      window.removeEventListener("pointermove", handclick);
    };
  }, [close]);
  return (
    <>
      <div style={{ width: "100%", height: "500px" }}>
        <label>
          <input
            type="checkbox"
            value={close}
            onChange={(e) => setclose(e.target.checked)}
          />
          please select this
        </label>
        <hr />

        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "red",
            transform: `translate(${move.x}px,${move.y}px)`,
          }}
        ></div>
      </div>
    </>
  );
};

export default EX_1;
