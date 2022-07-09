const express=require('express')
require('./db/mongoose')

const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')
const app=express()
const port=process.env.PORT || 3000



// app.use((req,res,next)=>{
//     if(req.method==='GET'){
//         res.send('GET requests are disabled')

//     }
//     else{
//         next()
//     }   

// })

// app.use((req,res,next)=>{
//     res.status(503).send('Site is currently down')
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)




app.listen(port,()=>{
    console.log('Server is up on port ' + port )
})



const Task=require('./models/task')
const User=require('./models/user')

const main=async()=>{
    // const task=await Task.findById('62c97ced677de411ac86c3bf')
    // await task.populate('owner')
    // console.log(task.owner)
    const user=await User.findById('62c97b7e662332da06067e71')
    await user.populate('tasks')
    console.log(user.tasks)


}
main()

