/**
 * Created by Алексей on 21.06.2017.
 */

const promisesMiddleware = store => next => action => {
    if (action.type !== "PROMISE") {
        return next(action)
    }
    console.log("promise");
    const [startAction, succsesAction, failureAction] = action.actions;
    store.dispatch({
        type: startAction
    });
    action.promise.then(data => {
        store.dispatch({
            type: succsesAction,
            data
        })
    }, error => {
        store.dispatch({
            type: failureAction,
            error
        })
    })


};

export default promisesMiddleware;