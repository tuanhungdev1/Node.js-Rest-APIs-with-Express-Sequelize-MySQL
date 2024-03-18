const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models/index");

db.sequelize
  .sync()
  .then(() => {
    console.log("Truy Cap thanh cong Database :) ");
  })
  .catch((err) => {
    console.log(`Truy Cap That Bai :( ! Error: ${err})`);
  });

app.get("/", (req, res) => {
  res.send("Home Page");
});

require("./routes/tutorial.routes")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server start in PORT ${PORT}`);
});
