require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const usersRoutes = require("./routes/users");

const app = express();
app.use(routes);
app.use("/users", usersRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Running on port ${process.env.PORT}`)
);
