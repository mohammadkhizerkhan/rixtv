import { ACTION_TYPE } from "../Action";

const filterReducer=(state,action)=>{
    switch (action.type) {
        case ACTION_TYPE.CATEGORIES:
            return {...state,category:action.payload}   
        case ACTION_TYPE.SEARCH:
            return {...state,search:action.payload}
        default:
            return state
    }
}

export {filterReducer}