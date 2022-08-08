const express = require("express");
const cors = require("cors");
const routes_auth = require("./routes/auth");
const routes_fav = require("./routes/favorites")
const app = express();
require("./db/db")
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());
app.use("/auth", routes_auth);
app.use("/favorites", routes_fav);
app.listen(port, (()=>{
    console.log(`listen on port: ${port}`);
}));