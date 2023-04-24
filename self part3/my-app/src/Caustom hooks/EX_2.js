import React from "react";
import { useFectch } from "./useFectch";

const EX_2 = () => {
  const items = useFectch("https://jsonplaceholder.typicode.com/todos/1");
  return (
    <div>
      {items?(<li>{items.title}</li>):(<li>loading</li>)}
    </div>
  );
};

export default EX_2;
