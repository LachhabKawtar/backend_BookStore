const { json } = require("express")
const utilisateur = require("../Models/utilisateur")
const utilisateurServices = require("../services/utilisateurServices")
const getAllUtilisateurs=async(req,resp)=>{
    try{
       const result =  await utilisateurServices.getAllutilisateurs()
       resp.status(200).json(result)
    }catch(error){
        resp.status(500).json(error)
    }
}
const CreateUtilisateur=async(req,resp)=>{
    try{
        const u = new utilisateur ({
           ... req.body 
          })
        console.log(req.body)
        const result =  await utilisateurServices.addutilisateur(u)
        resp.status(200).json({
            message: 'Objet created !'
          })
     }catch(error){
         resp.status(500).json(error)
     }
}
module.exports={
    getAllUtilisateurs,
    CreateUtilisateur
}