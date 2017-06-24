/**
 * Created by Алексей on 24.06.2017.
 */
const todo = (state, action) => {
    switch (action.type){
        case "ADD_TODO":
            return {
                text: action.text,
                index: action.index,
                completed: false
            };
        case "TOGGLE_TODO":{
            if (state.index !== action.index)
                return state;
            return {
                ...state,
                completed: !state.completed
            }
        }
        default: return state;
    }
};


export default function todos (state=[], action) {
    switch (action.type){
        case "ADD_TODO": {
            return [...state, todo(undefined, action)]
        }
        case "TOGGLE_TODO":{
            return state.map(t => todo(t, action))
        }
        default: return state;
    }
};