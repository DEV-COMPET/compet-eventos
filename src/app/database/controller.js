/* Controllers */
import Project from '@/app/model/projects'
import connectDB from "@app/database/index"
export async function getProjects(req,res){
    try {
        connectDB()
        const project = await Project.find({})
        console.log(project)
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