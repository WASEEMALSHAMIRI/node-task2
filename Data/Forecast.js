
  const request = require("request")


const Forecast = (Latitude , Longtitude , callback) => {

    const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=" + Latitude + "," + Longtitude
    
    request ({url , json : true  } , (error , response) => {
    
        if (error) {
            callback ( "unable to connect weather api service" , undefined )
        } else if (response.body.error){
             callback (response.body.error.message , undefined )
        }else {
    
             callback (undefined , response.body.location.name + " it is : " + response.body.current.condition.text 
            + "and temp is : "  + response.body.current.temp_c )
        }
    })
      }

    module.exports = Forecast

