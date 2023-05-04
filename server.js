const express = require("express");
const cors = require("cors");
const db = require("./database/DB");

const controllers = require("./controllers")

const app = express();

app.use(cors())
app.use(express.json())

// Rutas

app.get("/user/:userId", controllers.GetUserById)
app.post("/register", controllers.Register)
app.post("/login", controllers.Login)
app.post("/loginAdmin", controllers.LoginAdmin)
app.get("/administrator/:userId", controllers.GetUserById)
//app.post("/Administrator/:id", controllers.GetUserById)



const PORT = 4000;

app.listen(PORT, () => {
    console.log("Server running on the port", PORT);
    db();
});

module.exports = app