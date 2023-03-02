const mongoose=require("mongoose")

const clientSchema=new mongoose.Schema(	
    {
        first_name:{ type: String, required: true },
        last_name:{ type: String, required: true },
        cin : { type: String, required: true },
        adress : { type: String, required: true },
    }
)
module.exports=mongoose.model("client",clientSchema)