
import {MongoClient} from "mongodb"

const url = process.env.DATABASE_URL;
const options ={}

let client = new MongoClient(url,options)
let clientPromise = client.connect()

export default clientPromise