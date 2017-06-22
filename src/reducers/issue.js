/**
 * Created by Алексей on 21.06.2017.
 */
export default function (state=[], action){
    switch (action.type){
        case 'ISSUES_LOADED':
            return action.data;
        default:
            return state;
    }
}
