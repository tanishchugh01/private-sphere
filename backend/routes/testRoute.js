import { Router } from "express";

const router = Router();

router.get("/test", async (req, res) => {
  const vari = req.query.abc;
  console.log(vari);
  res.status(200).send(`you are ${vari}`);
});

const testRoute = router;

export default testRoute;
