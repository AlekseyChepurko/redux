/**
 * Created by Алексей on 21.06.2017.
 */

export function getIssues(){
    return fetch("https://api.github.com/repos/Yomguithereal/baobab/issues")
        .then(r=>r.json())
        .then(r=>r)
}