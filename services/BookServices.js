const { model } = require("mongoose");
const modelBook = require( "../Models/Book" );
const getAllBook=async(req,resp)=>{
    return  await modelBook.find().populate("category") ///charger l'objet categorie categorie=>champ
}
const getBookById=async(id)=>{
    return   await  modelBook.findOne({_id:id}).populate("category")
 }
 const addBook=async(c)=>{
     return  await modelBook.create(c)
 }
 const deleteBook=async(id)=>{
     return  await modelBook.findByIdAndDelete({_id:id})
 }
 const updateBook=async(id,c)=>{
     return  await  modelBook.updateOne({_id:id} ,c) 
 }
 const getBookCategory=async(id)=>{
    return   await  modelBook.find({category:id})
 }
 module.exports={
    getAllBook,
    getBookById,
    addBook,
    deleteBook,
    updateBook,
    getBookCategory
}