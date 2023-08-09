//import clientPromise from "@/app/database/index";

import {getProjects,createProject,updateProject} from '@/app/database/controller'

export default async function handler(req, res) {
  /*const client = await clientPromise;
  const db = client.db("TodayNews");*/
  switch (req.method) {
    case "POST":
      //console.log('body '+ req.body)
      createProject(req,res)
     res.status(200).json({message:'projeto criado'})
    case "GET":
      /*if(req.body){
        console.log(req.body.name)
      }else{
       */

      getProjects(req,res)
      
      break;
    case "PUT":
      updateProject(req,res)
      res.status(200).json({message:'projeto atualizado'})
  }
}
