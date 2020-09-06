const path = require('path')
const express = require('express')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const app = express()

const publicDirectoryPath = path.join(__dirname,'../public')


app.use(express.static(publicDirectoryPath))
//app.com

app.get('' , (req,res) => {
    res.send('Hello Express!')
})



//app/help.com

// app.get('/help',(req,res) => {
//     res.send('Welcome to Help page!')
// })

//app/about.com

// app.get('/about' , (req,res) => {
//     res.send('<h1>Welcome to about page!</h1>')
// })

//Weather route

app.get('/weather' , (req,res) => {
    if(!req.query.address){
        return res.send({
            error : 'please provide a valid place!'
        })
    }
  
    geocode(req.query.address,(error,{latitude,longitude,location} ) => {

        if(error){
            return res.send(error)
        }
        forecast(latitude,longitude,(error,forecastData) => {
            if(error){
                return res.send(error)
            }
            res.send({
                forecast : forecastData,
                location,
                address : req.query.address
            })
            
              
        })
    })
})

app.get('/products',(req,res) => {

    if(!req.query.search){
       return res.send({
          error : 'please provide a valid search!'
       })
    }
    console.log(req.query.search)   
    res.send({
        products : []
    })
})

app.listen(4000 , () => {
    console.log('you are on server port 4000.')
})