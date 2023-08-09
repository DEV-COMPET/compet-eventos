/* Controllers */
import Project from '@/app/model/projects'
import connectDB from "@app/database/index"
export async function getProjects(req,res){
    try {
        connectDB()
        const project = await Project.find({})
     
        if(!project) return res.status(404).json({error:'Data not found'})
        res.status(200).json(project)
    } catch (error) {
        res.status(400).json({error:'error while fetching data'})
        console.log(error)
    }
}

export async function createProject(req,res){
    try {
        //connectDB()
        const project = await Project.create(req.body)
        console.log(project)
        //if(!project) return res.status(404).json({error:'Data not found'})
        res.status(200).json(project)
    } catch (error) {
        res.status(400).json({error:'error while fetching data'})
        console.log(error)
    }
}
export async function updateProject(req,res){
    console.log("chegou aqui")
    console.log(req.query.title)
    try{
        const title = req.body.title
        console.log(title)
        const formData = req.body
        const description = req.body.description
        let filter = {title:title}
        const author = req.body.author
        const data = {
            title:title,
            description:description,
            author:author
        }
        if(title && formData){
            const project = await Project.findOneAndUpdate(filter,data,{new:true});  
            res.status(200).json({'project':project})
        }
        res.status(404).json({error:"Project not selected"})
    }catch(error){
        res.status(404).json({error:"Error while updating data"})
    }
}