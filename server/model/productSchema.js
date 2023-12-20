import  mongoose,{Schema} from "mongoose"

const ProductSchema = new Schema(
    {
        price : {type: Number},
        name:{type:String}, 
        image : {type: String}
        // image : [{type: String}]

    },{timestamps :true}
)

export default mongoose.model("products",ProductSchema)