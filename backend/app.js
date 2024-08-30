const express=require("express");
const dotenv=require('dotenv')
const cors=require('cors')
const app=express();
dotenv.config()
//avrorazib fHVlCSrmrZYjLpVQ
//middleware
app.use(express.json());
app.use(cors());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@job-hostely.ybt9u.mongodb.net/?retryWrites=true&w=majority&appName=job-hostely`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create database
    const database=client.db('jobHostely');
    const jobsCollection=database.collection('jobs');

    //get all jobs
    app.get("/all-job",async(req,res)=>{
        const jobs=await jobsCollection.find({}).toArray();

        res.send(jobs);
    });

    app.post('/post-job',async(req,res)=>{
        const body=req.body;
        body.creareAt=new Date();

        console.log(body);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.get('/',(req,res)=>{
    res.send("node");
})
app.listen(process.env.POST,()=>{
    console.log("app is listening at port 3000");
})