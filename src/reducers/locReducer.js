// 
export default (loc={temperature:0},action)=>{
        switch(action.type){
            case 'GET_LOC':
                    return action.payload
            default:
                    return loc
            }
}