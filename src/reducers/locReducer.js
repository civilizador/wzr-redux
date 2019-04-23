// 
export default (weatherData={temperature:0},action)=>{
        switch(action.type){
            case 'GET_LOC':
                    return action.payload
            case 'GET_LOC_BY_ZIP':
                console.log('inside of ZipCOde reducer we get', action.payload)
                    return action.payload    
            default:
                    return weatherData
            }
}