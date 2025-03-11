import { MongoClient, ObjectId } from "mongodb"


const Handler=async(req,res)=>{

    if(req.method === "POST"){
        const data=req.body
    
    const Client=await MongoClient.connect('mongodb+srv://Amit:hQOowmd9qfJPIiMN@cluster0.rleji.mongodb.net/Todos?retryWrites=true&w=majority&appName=Cluster0')
    const db=Client.db()
    const TodosCollection=db.collection("Todos")
    const result=await TodosCollection.insertOne(data)
    console.log(result)
    Client.close()
    res.status(201).json({message :"Todo inserted"})};


    if(req.method==="PATCH"){
        const { id, status } = req.body
        console.log(req.body)
        console.log(status," new status")
        // if (!id || !newStatus) {
        //     return res.status(400).json({ message: "Invalid data" });
        //   }
        const Client=await MongoClient.connect('mongodb+srv://Amit:hQOowmd9qfJPIiMN@cluster0.rleji.mongodb.net/Todos?retryWrites=true&w=majority&appName=Cluster0')
    const db=Client.db()
    const TodosCollection=db.collection("Todos")
    const result=await TodosCollection.updateOne({_id: new ObjectId(id)},{$set:{status : status}})
    Client.close()
    res.status(201).json({message:"status updated"})
    }

}

export default Handler;