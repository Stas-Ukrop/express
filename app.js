import express from 'express'
import router from './routers/links.js'
const app=express()

app.use('/',router)
app.use('/about',router)
app.use((req,res,next)=>{
    res.status(404).json({message:"Not found"})
})
app.use((err,req,res,next)=>{
    res.status(500).json({message:err.message})
})
export default  app