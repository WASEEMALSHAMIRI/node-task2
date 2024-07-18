
const Forecast = require ("./Data/Forecast");

const Code = require("./Data/Code")

 const country = process.argv[2]

 Code( country , (error , data) => {
    console.log("ERROR : " , error)
    console.log("DATA : "  , data)

    Forecast( data.Latitude , data.Longtitude , (error , data) => {
        console.log("ERROR : " , error)
        console.log("DATA : " , data)
     } )
 })

 




  
  


