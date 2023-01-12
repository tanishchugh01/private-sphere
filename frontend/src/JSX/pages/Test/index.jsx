import testApi from "@api/testApi";
import { useEffect, useState } from "react";
const Test = () => {
  const [msg, setMsg] = useState("Loading...");
  useEffect(() => {
    testApi().then((res) => {
      setMsg(res);
    });
  });
  return <>{msg}</>;
};

export default Test;
