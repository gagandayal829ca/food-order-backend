import express from "express";

import { AdminRoute, VandorRoute } from "./routes";

const app = express();

app.use("/admin", AdminRoute);
app.use("/vandor", VandorRoute);

app.listen(8000, () => {
  console.log("Listening to PORT:8000");
});
