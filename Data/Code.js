
  const request = require("request")

const Code = ( address , callback) => {

    const CodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address +  ".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"

  request ({url : CodeUrl , json : true} , (error , response) => {
     
    if (error){
        callback ("unable to connect geocode service" , undefined)
    }else if (response.body.message)  {
        callback (response.body.message , undefined )
    } else if (response.body.features.length == 0) {
         callback("Unable to find location" , undefined)
    } else {

        callback(undefined , {
             Longtitude : response.body.features[0].center[0],
             Latitude : response.body.features[0].center[1]
        } )
       
    }
  })
}

module.exports = Code