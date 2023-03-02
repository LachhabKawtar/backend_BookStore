
const bcrypt = require ('bcrypt');
const utilisateur = require("../Models/utilisateur");
const getAllutilisateurs=async(req,resp)=>{
    return  await utilisateur.find({}) 
}
const addutilisateur=async(u)=>{
    const salt=bcrypt.genSalt()
    u.mot_passe=bcrypt.hash(u.mot_passe,salt);
    return  await utilisateur.create(u)
}
module.exports={
    getAllutilisateurs,
    addutilisateur
}