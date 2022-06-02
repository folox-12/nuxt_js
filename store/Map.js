export default {
    state: {
        Coordinate:{
            Moscow: [55.756,37.6234],
            Odi:[55.673,37.2733],
        
        }
    },
    getters:{
        getCoordinate(state){
            return state.Coordinate
        }
    }

    
}