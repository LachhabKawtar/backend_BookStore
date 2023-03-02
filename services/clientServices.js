const client = require( "../Models/client.js" );
/**
 * Couche services : les traitements métier
 * await : attendre la fin de la fct async  
 */
const getAllClients=async(req,resp)=>{
    return  await client.find({}) 
}
const getClientByID=async(id)=>{
   return   await  client.findOne({_id:id})
}
const addClient=async(c)=>{
    return  await client.create(c)
}
const deleteClient=async(id)=>{
    return  await client.findByIdAndDelete({_id:id})
}
const updateClient=async(id,c)=>{
    return  await  client.updateOne({_id:id} ,c) 
}
module.exports={
    getAllClients,
    getClientByID,
    updateClient,
    deleteClient,
    addClient
}

