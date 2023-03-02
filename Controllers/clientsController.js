const { json } = require("express")
const client = require("../Models/client")
const ClientServices = require("../services/clientServices")
//fonction asynchrone fct non bloquantes
const getAllClients=async(req,resp)=>{
    try{
       const result =  await ClientServices.getAllClients()
       resp.status(200).json(result)
    }catch(error){
        resp.status(500).json(error)
    }
}
const getClientByID=async(req,resp)=>{
    try{
        const result =  await ClientServices.getClientByID(req.params.id)
        resp.status(200).json(result)
     }catch(error){
         resp.status(500).json(error)
     }
}
const CreateClient=async(req,resp)=>{
    try{
        const c = new client({
           ... req.body // ... faire une copie de tous les éléments de req.body
          })
        console.log(req.body)
        const result =  await ClientServices.addClient(c)
        resp.status(200).json({
            message: 'Objet created !'
          })
     }catch(error){
         resp.status(500).json(error)
     }
}
const deleteClient=async(req,resp)=>{
    try{
        const result =  await ClientServices.deleteClient(req.params.id)
        resp.status(200).json({
            message: 'Objet deleted !'
          })
     }catch(error){
         resp.status(500).json(error)
     }
}
const updateClient=async(req,resp)=>{
    try{
        const result =  await ClientServices.updateClient(req.params.id,req.body)
        resp.status(500).json({
            message: 'Objet updated !'
          })
     }catch(error){
         resp.status(500).json(error)
     }
}
module.exports={
    getAllClients,
    getClientByID,
    updateClient,
    deleteClient,
    CreateClient
}


























//Modifier
/*app.put("/api/Clients/:id",(res,req)=>{
    const id = req.params.id
    const index = Clients.findIndex(client => client.idC == id)
    if(index==-1)   return res.status(404).send('Client Not found')
    else{ //client inexistant
    const clients = {
        id: id,
        Nom: req.body.Nom,
        Prenom: req.body.Prenom
    }
    Client[index] =c
}})*/

//exporter des fonctions pour les utilisées dans d'autre fichier
