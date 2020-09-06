const request = require('request')

const forecast = (latitude , longitude , callback) => {
  const url = 'https://www.google.com/maps/place/Pandalaparru,+Andhra+Pradesh+534302/@ ' + latitude + ',' + longitude + ',16z/data=!3m1!4b1!4m5!3m4!1s0x3a37baf2d4b0df27:0x4e0c3b8a400a9d71!8m2!3d16.8955996!4d81.7137364'

  // request({url : url , json : true} , (error,response) => {
  request({url , json : true} , (error, {body}) => {
      if(error){
          callback('Plsease connect to a network !',undefined)
      }
      //else if(response.body.error){
      else if(body.error){
          callback('Unable to find that search !',undefined)
      }
      else{
          //callback(undefined, response.body)
          callback(undefined, body)
      }
  })
}

module.exports = forecast