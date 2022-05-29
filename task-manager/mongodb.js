const mongodb=require('mongodb')



const {MongoClient,ObjectID}=require('mongodb')

const connectURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'





MongoClient.connect(connectURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to database')

    }
    console.log('Connected')
    const db=client.db(databaseName)

    db.collection('tasks').find({completed:false}).toArray((error,user)=>{
        if(error){
           return console.log('Error while fetching user')
        }
        console.log(user)

    })


    db.collection('tasks').findOne({_id: new ObjectID("6291fa278953d6eb94ada16c")},(error,user)=>{
        if(error){
            return console.log("Error while fetching the user")
        }
        console.log(user)
    })
    
})

