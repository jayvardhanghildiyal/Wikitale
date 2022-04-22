const defaultState = {
    users: [],
    posts: [],
    post: {}
}

const admin = (state = defaultState, action) => {
    switch(action.type){
        case "GOT_USERS": 
            return {
                ...state,
                users: action.payload
            }
        case "GOT_POSTS":
            return {
                ...state,
                posts: action.payload
            }
        case "POST_ADDED":
            return {
                ...state, //always return the existing state
                posts: state.posts.concat(action.payload), //the next property that we pass is the part of the state that we are adjusting or modifying 
                //adds it to the list of existing posts
                post: action.payload
            }
        case "UPLOAD_IMAGE":
            return {
                ...state,
                post: {
                    ...state.post,
                    PostImage: [action.payload]
                } 
            }
        case "GOT_SINGLE_POST":
            return {
                ...state,
                post: action.payload
            }
        case "UPDATED_POST": 
            return {
                ...state,
                post: action.payload,
                posts: state.posts.map(p => {
                    if(p.id === action.payload.id){
                        //this is the existing post in redux that has been updated and currently in action.payload
                        return {
                            ...p,
                            ...action.payload
                        }
                    }else {
                        return p;
                    }
                })
            }
        default:
            return state
    }
}

export default admin;