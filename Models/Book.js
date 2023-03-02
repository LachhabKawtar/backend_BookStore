const mongoose=require("mongoose")

const BookShema=new mongoose.Schema(	
    {
       name:{ type:String, required: true },
       description:{ type:String, required: true },
       isbn:{ type: String, required: true },
       author:{ type: String, required: true },  
       editor:{ type: String, required: true }, 
       edition_date:{ type: Date, required: true },
       price:{ type: Number, required: true },
       image:{ type: String, required: true }, 
       category:{
           type:mongoose.Types.ObjectId,
           ref:"Categorie"
       }
    }
)
module.exports=mongoose.model("Book",BookShema) 