export const fetchApi = async (url) => {
    return await fetch(url).then(resp => resp.json()).then( data => {
        return {
            loading: false,
            error: null,
            data
        }
    }).catch( error => {
        return {
            loading: false,
            error,
            data: null
        }
    })
}