const express = require("express");
const cont_auth = require("./../controllers/controller-auth");
const router = express.Router();

router.post("/register",(req, res)=>{
   
});

router.put("/register",(req, res)=>{
   const {name, password} = req.body 
   res.send(`${name}`)
   console.log(name, password); 
});
router.post("/login", (req, res)=>{
   const {name, password} = req.body 
   res.send(`${name}`)
   console.log(name, password);
});

router.put("/login",(req, res)=>{
   const {name, password} = req.body 
   res.send(`${name}`)
   console.log(name, password);
});

module.exports = router;