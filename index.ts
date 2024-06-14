import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from food order backend");
});

app.listen(8000, () => {
  console.log("Listening to PORT:8000");
});
