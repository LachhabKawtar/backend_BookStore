const { json } = require("express")
const commande = require("../Models/Commande")
const CommandeServices = require("../services/CommandeServices")
const getAllCommandes=async(req,resp)=>{
    try{
       const result =  await CommandeServices.getAllCommandes()
       resp.status(200).json(result)
    }catch(error){
        resp.status(500).json(error)
    }   
}
const getCommandeByID=async(req,resp)=>{
    try{
        const result =  await CommandeServices.getCommandeById(req.params.id)
        resp.status(200).json(result)
     }catch(error){
         resp.status(500).json(error)
     }
}
const CreateCommande=async(req,resp)=>{
    try{
        const c = new commande({
           ... req.body       //... faire une copie de tous les éléments de req.body
          })
        console.log(req.body)
        const result =  await CommandeServices.addcommande(c)
        resp.status(200).json({
            message: 'Objet created !'
          })
     }catch(error){
         resp.status(500).json(error)
     }
}
const deleteCommande=async(req,resp)=>{
    try{
        const result =  await CommandeServices.deletecommande(req.params.id)
        resp.status(200).json({
            message: 'Objet deleted !'
          })
     }catch(error){
         resp.status(500).json(error)
     }
}
const updateCommande=async(req,resp)=>{
    try{
        const result =  await CommandeServices.updatecommande(req.params.id,req.body)
        resp.status(200).json({
            message: 'Objet updated !'
          })
     }catch(error){
         resp.status(500).json(error)
     }
}
module.exports={
    getAllCommandes,
    getCommandeByID,
    updateCommande,
    deleteCommande,
    CreateCommande
}