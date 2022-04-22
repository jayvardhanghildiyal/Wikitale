//we write here, functions that will return an object with a type and a payload
import API from "../../store/util/api";

export const login = (email, pass) => {
    return (dispatch)  => {
        API.login(email, pass, res => {
            console.log("Result", res.data);
            dispatch({
                    type: "LOGIN", //type of actions
                    payload: {
                        email: email,
                        token: res.data.id,
                        userId: res.data.userId 
                    }
            })
        })
    }
    /*
    return {
        type: "LOGIN", //type of actions
        payload: {email, pass}
    }
    */
}

export const register = (email, pass) => {
    return {
        type: "REGISTER",
        payload: {email, pass}
    }
} 