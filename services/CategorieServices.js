const Categorie = require( "../Models/Categorie" );
/**
 * Couche services : les traitements métier
 * await : attendre la fin de la fct async  
 */
const getAllCategories=async(req,resp)=>{
    return  await Categorie.find({}) 
}
const getCategorieByID=async(id)=>{
   return   await  Categorie.findOne({_id:id})
}
const addCategorie=async(c)=>{
    return  await Categorie.create(c)
}
const deleteCategorie=async(id)=>{
    return  await Categorie.findByIdAndDelete({_id:id})
}
const updateCategorie=async(id,c)=>{
    return  await  Categorie.updateOne({_id:id} ,c) 
}
module.exports={
    getAllCategories,
    getCategorieByID,
    updateCategorie,
    deleteCategorie,
    addCategorie
}

