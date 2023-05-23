import clientPromise from ".";

let db
let client
let posts

async function init(){
    if(db) return
    try{
        client = await clientPromise
        db = await client.db("TodayNews")
        posts = await db.collection('posts')
    }catch(error){
        throw new Error('failed to stabilish connectio to database')
    }
}
;(async()=>{
    await init()
})()
//function to fetch

export async function getPosts(){
    try{
        if(!posts){
           await init() 
        } 
        const result = await posts
        .find({})
        .limit(3)
        .toArray()
    }catch(error){
        return {error:'Failed to fetch movies'}
    }
}