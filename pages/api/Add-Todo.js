import { MongoClient } from "mongodb"


const Handler=async(req,res)=>{

    if(req.method === "POST"){
        const data=req.body
    
    const Client=await MongoClient.connect('mongodb+srv://Amit:hQOowmd9qfJPIiMN@cluster0.rleji.mongodb.net/Todos?retryWrites=true&w=majority&appName=Cluster0')
    const db=Client.db()
    const TodosCollection=db.collection("Todos")
    const result=await TodosCollection.insertOne(data)
    console.log(result)
    Client.close()
    res.status(201).json({message :"Todo inserted"})}

}

export default Handler;