//pour associer une route à une fonction
const { Router } = require("express")
var express = require("express")
const route = express.Router()
const utilisateurController= require("../Controllers/utilisateurController")

route.get("",utilisateurController.getAllUtilisateurs)
     .post("",utilisateurController.CreateUtilisateur)

module.exports=route;