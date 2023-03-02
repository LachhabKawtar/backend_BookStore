const { json } = require("express")
const Categorie = require("../Models/Categorie")
const CategorieServices = require("../services/CategorieServices")
//fonction asynchrone fct non bloquantes
const getAllCategories=async(req,resp)=>{
    try{
       const result =  await CategorieServices.getAllCategories()
       resp.status(200).json(result)
    }catch(error){
        resp.status(500).json(error)
    }
}
const getCategorieByID=async(req,resp)=>{
    try{
        const result =  await CategorieServices.getCategorieByID(req.params.id)
        resp.status(200).json(result)
     }catch(error){
         resp.status(500).json(error)
     }
}
const CreateCategorie=async(req,resp)=>{
    try{
        const c = new Categorie({
           ... req.body // ... faire une copie de tous les éléments de req.body
          })
        console.log(req.body)
        const result =  await CategorieServices.addCategorie(c)
        resp.status(200).json({
            message: 'Objet created !'
          })
     }catch(error){
         resp.status(500).json(error)
     }
}
const deleteCategorie=async(req,resp)=>{
    try{
        const result =  await CategorieServices.deleteCategorie(req.params.id)
        resp.status(200).json({
            message: 'Objet deleted !'
          })
     }catch(error){
         resp.status(500).json(error)
     }
}
const updateCategorie=async(req,resp)=>{
    try{
        const result =  await CategorieServices.updateCategorie(req.params.id,req.body)
        resp.status(200).json({
            message: 'Objet updated !'
          })
     }catch(error){
         resp.status(500).json(error)
     }
}
module.exports={
    getAllCategories,
    getCategorieByID,
    updateCategorie,
    deleteCategorie,
    CreateCategorie
}
