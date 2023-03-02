//pour associer une route à une fonction
const { Router } = require("express")
var express = require("express")
const route = express.Router()
const CategoriesController= require("../Controllers/CategorieController")

route.get("",CategoriesController.getAllCategories)
     .post("",CategoriesController.CreateCategorie)

route.delete("/:id",CategoriesController.deleteCategorie)
     .put("/:id",CategoriesController.updateCategorie)
     .get("/:id",CategoriesController.getCategorieByID)

module.exports=route;

