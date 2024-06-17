const ToDoModel = require ('../models/ToDoModel')

module.exports.getToDo = async(req, res) => {
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

module.exports.saveToDo = async(req, res) => {
    const { text } = req.body

    ToDoModel.create({text})
    .then((data)=>{
        console.log("Added Successfully...");
        console.log(data);
        res.send(data)
    })
}

module.exports.updateToDo = async(req, res) => {
    const { _id, text } = req.body

    ToDoModel.findByIdAndUpdate(_id, {text})
    .then((data)=>{
        console.log("Updated Successfully...");
        console.log(data);
        res.send(data)
    })
    .catch((err) => {
        console.log(err)
        res.json({"error":"Invalid Object ID"})
    })
}

module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body

    ToDoModel.findByIdAndDelete(_id)
    .then((data) => {
        console.log(`Deleted successfully...`)
        console.log(data)
        res.json(data)
    })
    .catch((err) => {
        console.log(err)
        res.json({"error":"Invalid Object ID"})
    })
}