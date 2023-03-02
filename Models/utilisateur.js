const mongoose=require("mongoose")

const utiliShema=new mongoose.Schema(	
    {
        nom:{ type: String, required: true },
        prenom:{ type: String, required: true },
        mot_passe : { type: String, required: true },
        email : { type: String, required: true },
    }
)
module.exports=mongoose.model("utilisateur",utiliShema)