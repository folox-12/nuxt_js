export default {
    state: {
        Coordinate:{
            Moscow: [55.756,37.6234],
            Odintsovo:[55.673,37.2733],
            Kubinka:[55.574,36.6952],
            default:[55.673,37.2733],
        
        }
    },
    getters:{
        getCoordinate(state){
            return state.Coordinate
        }
    }

    
}