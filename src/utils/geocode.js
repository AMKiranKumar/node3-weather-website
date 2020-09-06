const request = require('request')

const geocode = (address , callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/ ' +  encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW1raXJhbmt1bWFyIiwiYSI6ImNrZWxkOTBycjA5MjgzM284bXBxZnQzd3gifQ.Q2tjW6bI3h40IFcFDue7jQ'

    //request( {url : url, json : true} , (error,response) => {
    request( {url , json : true} , (error,{body}) => {
        if(error){
            callback('please check your internet connection !' , undefined)
        }
        else if(response.body.features.length === 0){
            callback('Sorry we are unable to find that location' , undefined)
        }
        else{
            callback(undefined ,{
                latitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                location : body.features[0].place_name
            })
        }
    } )
}


module.exports = geocode