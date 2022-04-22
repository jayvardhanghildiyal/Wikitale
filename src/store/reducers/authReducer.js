const defaultState = {
    user: {},
    token: null
}

//takes in the state and acrion and determines the action type
const auth = (state = defaultState, action) => { //auth handles state changes
    switch(action.type){
        case "LOGIN":
                return{
                    ...state,
                    user: action.payload,
                    token: action.payload.token
                }
        default:    
                return state
    }
}

export default auth;