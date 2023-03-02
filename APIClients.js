const express=require("express")
const app=express()
const mongosse=require("mongoose")
const clienttMidl=require("./middleware/clientsMiddleware")
const router=require("./Routes/clientsRoutes")
const routeCommande =require("./Routes/CommandeRoutes")
const routeBook =require("./Routes/BookRoutes")
const routeCategorie=require("./Routes/CategorieRoutes")
const routeUtilisateur=require("./Routes/utilisateurRoute")
const cors=require("cors") 
app.use(cors())
app.use(express.json())          //pour parser les données envoyées sous format json
app.use(clienttMidl.loggingParams)
app.use(clienttMidl.loggingUrls)

app.use(express.urlencoded())   //analyse les requêtes entrantes avec des charges utiles codées en URL 
require("dotenv").config()     //charger url et le stocker dans l'objet process
mongosse.connect(process.env.db_url)
.then(result=>
    app.listen(3222,()=>{
        console.log("server is running.. and connection established ")
    }))
.catch(error=>console.log("error"))
app.use("/Clients",router)
app.use("/Commandes",routeCommande)
app.use("/Book",routeBook)
app.use("/Categories",routeCategorie)
app.use("/utilisateurs",routeUtilisateur)
app.get("/",(req,res)=>{
   res.send("<h2> Bienvneue dans notre app Express</h2>")
});

 
