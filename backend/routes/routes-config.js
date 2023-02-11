import testRoute from "./testRoute.js";

function configureRoutes(app) {
  const base = process.env.NODE_APP_BASE_URL;
  // app.use(process.env.NODE_APP_BASE_URL, testRoute);
  app.use(base, testRoute);
}

export default configureRoutes;
