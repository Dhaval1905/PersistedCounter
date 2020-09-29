

import { LOGIN } from "../Action/authAction";

const initialState = {
   isLoggedIn: false
}

const authreducer = (state=initialState,action) => {
    
        switch (action.type) {
           case 'LOGIN':
               return{
                    ...state,
                    isLoggedIn:action.payload
               }
            default:{
                return state
            }
        }
    }
export default authreducer