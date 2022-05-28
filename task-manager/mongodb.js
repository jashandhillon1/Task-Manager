const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient
// const ObjectID=mongo.ObjectID


const {MongoClient,ObjectID}=require('mongodb')

const connectURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'


const id=new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)


MongoClient.connect(connectURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to database')

    }
    console.log('Connected')
    const db=client.db(databaseName)
    db.collection('users').insertOne({
        
        name:'vikramś',
        age:23
    },(error,result)=>{
        if(error){
            return console.log('Unable to insert User')

        }

        console.log(result.acknowledged)

    })


    db.collection('users').insertMany([
        {
            name:'jen',
            age:28
        },
        {
            name:'love',
            age:26
        }
    ],(error,result)=>{
        if(error){
            return console.log("unable to put docs")
        }

        console.log(result.acknowledged)


    })


    db.collection('tasks').insertMany([
        {description:'Clean the house',
        completed:true

        },
        {
            description:'Renew the inspection',
            completed:false
        },
        {
            description:'Learn Cp',
            completed:false
        }
    ],(error,result)=>{
        if(error){
            return console.log('Unable to put')
        }
        console.log(result.acknowledged)
    })

})

