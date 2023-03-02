//pour associer une route à une fonction
const { Router } = require("express")
var express = require("express")
const route = express.Router()
const ClientsController= require("../Controllers/clientsController")

route.get("",ClientsController.getAllClients)
     .post("",ClientsController.CreateClient)

route.delete("/:id",ClientsController.deleteClient)
     .put("/:id",ClientsController.updateClient)
     .get("/:id",ClientsController.getClientByID)

module.exports=route;

