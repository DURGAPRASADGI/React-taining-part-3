import React, { useEffect, useState } from "react";
import { craeteconnection } from "./Chatroom";
import { showNotification } from "./Notification";

const Face = ({ roomid, theme }) => {
  useEffect(() => {
    const c = craeteconnection();
    c.v("conected", () => {
      showNotification("conected", theme);
    });
    c.connetion();

    return () => c.disconnection();
  }, [roomid,theme]);
  return (
    <>
      <h1>welcome to {roomid} room</h1>
    </>
  );
};

const EX_4 = () => {
  const [open, setopen] = useState("general");
  const [dark, setdark] = useState(false);

  return (
    <>
      <select value={open} onChange={(e) => setopen(e.target.value)}>
        <option value={"general"}>general</option>
        <option value={"typing"}>typing</option>
        <option value={"music"}>music</option>
      </select>
      <label>
        <input
          type="checkbox"
          value={dark}
          onChange={(e) => setdark(e.target.checked)}
        />
        this is dark
      </label>
      <Face roomid={open} theme={dark ? "dark" : "light"} />
    </>
  );
};

export default EX_4;
