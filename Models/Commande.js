const mongoose=require("mongoose")

const CommandeSC=new mongoose.Schema(	
    {
       date_Commande:{ type: Date, required: true },
       date_reglement:{ type: Date, required: true },
       total:{ type: Number, required: true },
       etat:{ type: Number, required: true },    //1 payé , 2 non payé
       client:{
           type:mongoose.Types.ObjectId,
           ref:"client"
       }
    }
)
module.exports=mongoose.model("Commande",CommandeSC)