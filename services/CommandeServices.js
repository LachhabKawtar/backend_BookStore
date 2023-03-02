const { model } = require("mongoose");
const commande = require( "../Models/Commande" );
const getAllCommandes=async(req,resp)=>{
    return  await commande.find({}) 
}
const getCommandeById=async(id)=>{
    return   await  commande.findOne({_id:id})
 }
 const addcommande=async(c)=>{
     return  await commande.create(c)
 }
 const deletecommande=async(id)=>{
     return  await commande.findByIdAndDelete({_id:id})
 }
 const updatecommande=async(id,c)=>{
     return  await  commande.updateOne({_id:id} ,c) 
 }
 module.exports={
    getAllCommandes,
    getCommandeById,
    addcommande,
    deletecommande,
    updatecommande
}