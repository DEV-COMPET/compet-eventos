import connectDB from "@app/database/index"
export default function handler(req,res){
    connectDB()
}