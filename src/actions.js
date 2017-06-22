/**
 * Created by Алексей on 22.06.2017.
 */
import {getIssues} from './api'

export function loadIssues () {
    return {
        type: "PROMISE",
        actions: ['ISSUES_LOADING', 'ISSUES_LOADED', 'ISSUES_LOAD_FAILURE'],
        promise: getIssues()
    };
}