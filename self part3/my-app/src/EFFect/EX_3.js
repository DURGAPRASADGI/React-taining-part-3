import React, { useEffect, useState } from "react";
import { child } from "./chat";

const Room = ({ roomid }) => {
  const [details, setdetails] = useState("http://localhost:3000/");
  useEffect(() => {
    const co = child(details, roomid);
    co.connetion();
    return () => co.disconnection();
  }, [roomid, details]);
  return (
    <>
      <h1>welcome to {roomid} chat</h1>
      <input
        type="text"
        value={details}
        onChange={(e) => setdetails(e.target.value)}
      />
    </>
  );
};

const EX_3 = () => {
  const [list, setlist] = useState("general");
  const [btn, setbtn] = useState(false);

  return (
    <div>
      <select value={list} onChange={(e) => setlist(e.target.value)}>
        <option value={"general"}>general</option>
        <option value={"typing"}>typing</option>
        <option value={"server"}>server</option>
      </select>
      <button onClick={() => setbtn(!btn)}>
        {btn ? "close" : "open"} chat
      </button>
      {btn && <Room roomid={list} />}
    </div>
  );
};

export default EX_3;
