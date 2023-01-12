import backend from "./axios/create";

async function testApi () {
  const res = await backend.get("/test?abc=smart");
// console.log(res)
  return res.data
};

export default testApi;
