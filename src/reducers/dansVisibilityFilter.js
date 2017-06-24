/**
 * Created by Алексей on 24.06.2017.
 */

export default function visibilityFilter(state = 'SHOW_ALL', action){
    switch (action.type){
        case "SET_VISIBILITY_FILTER":
            return action.filter;
        default: return state;

    }
}