//pour associer une route à une fonction
const { Router } = require("express")
var express = require("express")
const route = express.Router()
const bookController= require("../Controllers/BookControler")

route.get("",bookController.getAllBook)
     .get("/BooksCategory/:id",bookController.getBooksByIdCategory)
     .post("",bookController.CreateBook)

route.delete("/:id",bookController.deleteBook)
     .put("/:id",bookController.updateBook)
     .get("/:id",bookController.getBookByID)

module.exports=route;