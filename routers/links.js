import got from 'got'
import express from 'express'
const router=express.Router()
import 'dotenv/config'

router.get('/',async(req,res)=>{
    try{
        const {lat,lon}=req.query
        const {weather,wind,name}=await got('https://api.openweathermap.org/data/2.5/weather',
        {
            searchParams:{
                 lat,
                 lon,
                 appid:process.env.API_KEY
            }
        }).json()
        res.send({weather,wind,name})
    }catch(error){
        next(error)
    }
})
router.get('/about',(req,res)=>{
    res.send('kdjhgkdfjhgdfkjg')
})
export default router