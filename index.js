const express = require('express')

const app = express()

const request = require('request')

const leagueId= 148
const APIKEY= 'c2f83d174d1cfe26fc023dcdaaff30c9087dc1ff32c4a6f0d7aef6c39fb97805'

app.set('views','./src/views')
app.set('view engine','ejs')

app.get('/standings',(req,res)=>{
    
    const baseUrl = 'https://apiv2.apifootball.com/?action=get_standings'
    
    const appId = `&league_id=${leagueId}&APIkey=${APIKEY}`
    
    const newUrl = baseUrl + appId
    request.get(newUrl, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    const data = JSON.parse(body)
    res.render('index',{data})
    })
})


app.listen(3000,()=>{
    console.log('app is listening on port 3000')
})