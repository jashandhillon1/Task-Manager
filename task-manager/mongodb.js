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

    db.collection('users').findOne({name: 'Jashanpreet Singh'},(error,user)=>{
        if(error){
           return console.log('Error while fetching user')
        }
        console.log(user)

    })
    
})

