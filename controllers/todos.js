const express = require("express");

const data=require("../data.json")
const getAllTodos=(req,res)=>{
res.send(data)
}

const singleTodo=(req,res)=>{
const singleItem=parseInt(req.params.id);
const getSingleTodo=data.find((items)=>items.id===singleItem)
if(getSingleTodo){
    res.json(getSingleTodo)
}else {
    res.status(404).json({ message: "User not found !" });
  }
}
const createTodo=(req,res)=>{
const newTodo=req.body;
const lastTodo=data[data.length-1]
console.log(lastTodo)
const newId=lastTodo.id+1;

const newCreatedTodo={
    id:newId,...newTodo
}
data.push(newCreatedTodo);
res.status(201).json(newCreatedTodo);
}

const updateTodo=(req,res)=>{
    const updateTodoId=parseInt(req.params.id)
    const getIndex=data.findIndex((items)=>items.id===updateTodoId)
    if (getIndex !== -1) {
        const updatedUser = { ...data[getIndex], ...req.body }; // Merge the existing user with the updated fields
        data[getIndex] = updatedUser; // Update the user in the array
        res.json(updatedUser); // Respond with the updated user
      } else {
        res.status(404).json({ message: "User not found" }); // Respond with a 404 Not Found status code
      }
}

const deleteTodo=(req,res)=>{

    const delTodoId=parseInt(req.params.id)
    const getIndex=data.findIndex((items)=>items.id===delTodoId)
    if(getIndex!==-1){
        data.splice(getIndex,1)
        res.status(200).json({ message: "User Removed" });
    }else {
        res.status(404).json({ message: "User not found" });
      }

}

module.exports={getAllTodos,createTodo,singleTodo,updateTodo,deleteTodo}