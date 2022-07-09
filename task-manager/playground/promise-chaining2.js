require('../src/db/mongoose')
const Task=require('../src/models/task')

// Task.findByIdAndDelete('629ec55154a88c77f0f8a26c').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })


const deleteTaskAndCount=async(id)=>{
    const task=await Task.findByIdAndDelete(id)
    const count=await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('62a5a3ed0a0466f907837faf').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})