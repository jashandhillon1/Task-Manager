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

    db.collection('users').updateOne({
        _id: new ObjectID("628a256e30b319373b362791")
    },{
        $set:{
            name:"Lovedeep"
        }

    }).then((result)=>{
       console.log(result) 
    }).catch((error)=>{
        console.log(error)
    })


    db.collection('tasks').updateMany({
        completed:false

    },{
        $set:{
            completed:true
        }
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })

    
    
})

