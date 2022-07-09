require('../src/db/mongoose')
const { update } = require('../src/models/user')
const User=require('../src/models/user')

// User.findByIdAndUpdate('629ec3739f50568ff5e63551',{age:4}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:1})

// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount=async(id,age)=>{
    const user=await User.findByIdAndUpdate(id,{age:age})
    const count=await User.countDocuments({age})
    return count
}

updateAgeAndCount('629ec3739f50568ff5e63551',2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})