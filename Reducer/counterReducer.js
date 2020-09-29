import { INCREASE,DECREASE } from "../Action/counterAction";
const initailState = {
    counter : 0
}

    const counterreducer = (state=initailState,action) => {
        switch(action.type){
            case 'INCREASE':{
                return{
                    ...state,
                    counter:state.counter + 1
                }
            }

            case 'DECREASE':{
                return{
                    ...state,
                    counter:state.counter - 1
                }
            }

            default: {
                return state
            }
        }
    }

export default counterreducer
