
/*import {MongoClient} from "mongodb"

const url = process.env.DATABASE_URL;
const options ={}

let client = new MongoClient(url,options)
let clientPromise = client.connect()
*/



import mongoose from 'mongoose';

async function connectDB() {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}
//const connection = {connectDB,clientPromise}
export default connectDB ;