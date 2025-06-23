const Zone = require("../models/Zone");

//create new zone
const createzone = async(req,res) => {
    const {title,desc,status} = req.body;
    const image = req.file ? `/uploads/${req.file.filename}`:'';
    const newzone = new Zone({title,desc,image,status});
    const saved = await newzone.save();
    res.status(201).json(saved);
};
//get all zone
const getzone = async(req,res)=>{
    const zones = await Zone.find();
    res.json(zones);
};
module.exports = {createzone,getzone}