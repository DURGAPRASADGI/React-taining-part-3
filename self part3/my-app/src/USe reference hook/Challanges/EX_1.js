import React, { useRef, useState } from "react";

const EX_1 = () => {
  const [render, setrender] = useState(false);
  const r = useRef(null);
  //   if(render===true){
  //     setrender(false)
  //   }
  const h = () => {
    setrender((pre) => !pre);
    setTimeout(() => {
      alert("hii" + r.current.value);
      setrender((curr) => !curr);
    }, 3000);
  };
  return (
    <div>
      <input type="text" ref={r} />
      <button onClick={h} disabled={render}>
        {render ? "sending" : "send"}
      </button>
    </div>
  );
};

export default EX_1;
