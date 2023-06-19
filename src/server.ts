import App from "./app";
import { IndexRoute } from "./api/routes/index.route";
import { UserRoute } from "./api/routes/user.route";

(async () => {
  const app = new App([new IndexRoute(), new UserRoute()]);
  await app.initializeApp();
  app.listen();
})();
