import axios from "axios";
import backend from "./axios/create";

async function testApi(abc = "smart") {
  const res = await backend.get("/test", {
    params: {
      abc: abc,
    },
  });
  // console.log(res)
  return res.data;
}

export default testApi;
