require("dotenv").config();

const express = require("express");
const { connection } = require("./connection");
const coffee = require("./model/coffee");
const coffeeRouter = require("./routes/coffee");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log("Testing");
    next();
});

app.get("/", (req, res) => res.status(200).json({msg: "Worked"}));
app.use("/coffee", coffeeRouter);

app.listen(process.env.HTTP_PORT || 80, () => {
    connection.authenticate();
    coffee.sync({alter: true});
    console.log("App online");
});