//import clientPromise from "@/app/database/index";

import {getProjects,createProject} from '@/app/database/controller'

export default async function handler(req, res) {
  /*const client = await clientPromise;
  const db = client.db("TodayNews");*/
  switch (req.method) {
    case "POST":
      console.log('body '+ req.body)
      createProject(req,res)
      /*
      const title = req.body.title
      const slug = req.body.slug
      const description = req.body.description
      const user = new User({ title, slug, description });
      
      let bodyObject = JSON.parse(req.body);
      console.log(bodyObject)
      let myPost = await db.collection("projects").insertOne(bodyObject);
      res.json(myPost.ops[0]);
      break;
      */
     res.status(200).json({message:'oi mundo'})
    case "GET":
      getProjects(req,res)
      /*const allPosts = await db.collection("posts").find({}).toArray();
      res.json({ status: 200, data: allPosts });*/
      break;
  }
}
