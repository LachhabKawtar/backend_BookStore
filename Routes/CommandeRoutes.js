//pour associer une route à une fonction
const { Router } = require("express")
var express = require("express")
const route = express.Router()
const commandeController= require("../Controllers/CommandeController")

route.get("",commandeController.getAllCommandes)
     .post("",commandeController.CreateCommande)

route.delete("/:id",commandeController.deleteCommande)
     .put("/:id",commandeController.updateCommande)
     .get("/:id",commandeController.getCommandeByID)

module.exports=route;