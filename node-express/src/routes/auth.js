const express = require("express")
const router = express.Router();

router.post("/register",(req, res)=>{
   const {name, password} = req.body 
   res.send(`${name}`)
   console.log(name, password);
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