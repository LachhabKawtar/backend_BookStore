const { json } = require("express")
const modelBook = require("../Models/Book")
const bookServices = require("../services/BookServices")
//fonction asynchrone fct non bloquantes
const getAllBook=async(req,resp)=>{
    try{
       const result =  await bookServices.getAllBook()
       console.log(result)
       resp.status(200).json(result)
    }catch(error){
        resp.status(500).json(error)
    }
}
const getBookByID=async(req,resp)=>{
    try{
        const result =  await bookServices.getBookById(req.params.id)
        resp.status(200).json(result)
     }catch(error){
         resp.status(500).json(error)
     }
}
const getBooksByIdCategory=async(req,resp)=>{
    try{
        const result =  await bookServices.getBookCategory(req.params.id)
        resp.status(200).json(result)
     }catch(error){
         resp.status(500).json(error)
     }
}
const CreateBook=async(req,resp)=>{
    try{
        const book = new modelBook({
           ... req.body // ... faire une copie de tous les éléments de req.body
          })
        console.log(req.body)
        const result =  await bookServices.addBook(book)
        console.log(result)
        resp.status(200).json({
            message: 'Objet created !'
          })
     }catch(error){
        resp.status(500).json({
            message: 'Error!!'
          })
     }
}
const deleteBook=async(req,resp)=>{
    try{
        const result =  await bookServices.deleteBook(req.params.id)
        resp.status(200).json({
            message: 'Objet deleted !'
          })
     }catch(error){
         resp.status(500).json(error)
     }
}
const updateBook=async(req,resp)=>{
    try{
        const result =  await bookServices.updateBook(req.params.id,req.body)
        resp.status(200).json({
            message: 'Objet updated !'
          })
     }catch(error){
         resp.status(500).json(error)
     }
}
module.exports={
    getAllBook,
    getBookByID,
    updateBook,
    deleteBook,
    CreateBook,
    getBooksByIdCategory
}


























//Modifier
/*app.put("/api/Books/:id",(res,req)=>{
    const id = req.params.id
    const index = Books.findIndex(Book => Book.idC == id)
    if(index==-1)   return res.status(404).send('Book Not found')
    else{ //Book inexistant
    const Books = {
        id: id,
        Nom: req.body.Nom,
        Prenom: req.body.Prenom
    }
    Book[index] =c
}})*/

//exporter des fonctions pour les utilisées dans d'autre fichier
