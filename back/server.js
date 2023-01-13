const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(router)


app.use((error,req,res,next)=>{
    res.send('Error')
})



app.listen(3000,()=>{
    console.log('백엔듯 서버 시작')
})
