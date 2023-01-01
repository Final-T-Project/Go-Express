const express=require("express");
const router=express.Router();
//rquire controller modules
const AddFeedback=require("../contollers/feedback.js")
router.post("/addFeedback",AddFeedback);
module.exports=router