import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("veiws", __dirname + "/src/views")

console.log("Hello");

app.listen(3000);