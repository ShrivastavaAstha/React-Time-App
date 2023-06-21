import React from "react";
import { useState } from "react";
<link
  href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=DynaPuff&display=swap"
  rel="stylesheet"
/>;
const App = () => {
  let newTime = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(newTime);

  const UpdateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  };
  return (
    <>
      <h1>{ctime}</h1>
      <button onClick={UpdateTime}>get time</button>
    </>
  );
};

export default App;
