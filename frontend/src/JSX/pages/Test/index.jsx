import testApi from "@api/testApi";
import { useEffect, useState } from "react";
import useQuery from "../../../methods/hooks/useQuery";
const Test = () => {
  const abc = useQuery("abc");

  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    testApi(abc).then((res) => {
      setMsg(res);
    });
  });

  return <>{msg}</>;
};

export default Test;
