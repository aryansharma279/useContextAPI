import React, { useState, useMemo } from "react";

const Com = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  const longTime = (num) => {
    for (let i = 0; i <= 1000000000000; i++) {
      console.log("inside loop");
      num = num + 1;
      return num;
    }
  };
  const calc = useMemo(() => {
    longTime(count);
  }, [count]);

  // console.log("workin");
  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <h1>{count}</h1>

        <input value={data} onChange={(e) => setData(e.target.value)} />
        <h1>{data}</h1>
      </div>
    </>
  );
};

export default Com;
