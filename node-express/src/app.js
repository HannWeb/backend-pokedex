const express = require("express");
const cors = require("cors");
const routes_ath = require("./routes/auth");
const app = express();

const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());
app.use("/auth", routes_ath);
app.listen(port, (()=>{
    console.log(`listen on port: ${port}`);
}));