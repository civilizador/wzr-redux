import axios from 'axios'
const getLoc = () => new Promise(
    (resolve,reject) => {
        window.navigator.geolocation.getCurrentPosition(
                (pos) => resolve(pos),
                (err)=>reject(err)
        )
    }
);

  const getWeatherData = async()=>{
     const loc = await getLoc();
     const data =  await axios.get(`https://weather.cit.api.here.com/weather/1.0/report.json?product=observation&latitude=${loc.coords.latitude}&longitude=${loc.coords.longitude}&oneobservation=true&app_id=lLg8lP3cuRb0KFN4aUVR&app_code=MgkUAlU8bwpPAAKhm3ZXyw`)
    return data
 }


export const getLocAction = () => {
    return async function(dispatch,getState) {
           const data = await getWeatherData();
           const weatherInfo= await data.data.observations.location[0].observation[0]
           console.log(data)
         dispatch({ type: 'GET_LOC',  payload: weatherInfo })
    }

}
