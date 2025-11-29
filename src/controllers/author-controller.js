const authorModel = require('../models/author-model')


exports.createAuthor = async (req, res) => {
    try {

        const { name, age, bio } = req.body
        const checkAuthorExist = await authorModel.find({ name, age, bio });        
        if (checkAuthorExist.length > 0) {
            return res.status(400).json({ message: "Author already exists with given details" });
        }
        let createAuthorObj = await new authorModel(req.body);
         createAuthorObj.save();
        res.status(200).send({ message: "Author created successfully" })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}




exports.ListOfAuthors = async (req,res)=>{
try {
    let {name,age,id} = req.query
    let obj ={}

     if(name){
        obj["name"] = name
     }
     if(age){
        obj["age"] = age
     }
     if(id){
        obj["_id"] = id
     }
      const authors = await authorModel.find(obj);        
     res.status(200).send({message:"Author data Fetched successfully",data:authors})

} catch (error) {
    res.status(400).json({ error: err.message });
}
}
