import React, { useEffect, useRef, useState } from "react";

const EX_2 = () => {
  const [close, setclose] = useState(false);

  return (
    <>
      <button onClick={() => setclose(!close)}>
        {close ? "play" : "pause"}
      </button>
      <G
        src={
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        }
        close={close}
      />
    </>
  );
};

export default EX_2;

const G = ({ src, close }) => {
  let f = useRef(null);
  useEffect(() => {
    if (close) {
      f.current.play();
      console.log(f);
    } else {
      f.current.pause();
    }
  }, [close]);
  return (
    <>
      <video src={src} ref={f} loop />
    </>
  );
};
