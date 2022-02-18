const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const path = require("path");
const pathToPublicFolder = path.resolve(__dirname, "./public");
const cors = require("cors");

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.static(pathToPublicFolder));

const userRoute = require("./routes/routeUsers");

app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
