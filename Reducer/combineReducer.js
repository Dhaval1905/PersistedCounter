import  {combineReducers} from "redux";
import   authReducer  from "./authReducer";
import  counterReducer  from "./counterReducer";

const combineReducer =  combineReducers({
        
        authReducer:authReducer,
        counterReducer:counterReducer
    
})

export default combineReducer