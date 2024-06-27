import axios from "axios"

const API_KEY = '44506265-d71991c146a410bc5b193d446'

const apiURL = `https://pixabay.com/api/?key=${API_KEY}`

const formatUrl = (params) => {
    let url = apiURL + '&per_page=25&safesearch=true&editors_choice=true'
    if (!params) return url
    let paramsKey = Object.keys(params)
    paramsKey.map(key => {
        let value = key == 'q' ? encodeURIComponent(params[key]) : params[key]
        url += `&${key}=${value}`
    })
    // console.log('final url: ', url)
    return url
}
export const apiCall = async (params) => {
    try {
        const response = await axios.get(formatUrl(params))
        const { data } = response
        return { success: true, data }
    } catch (err) {
        console.log('got error: ', err.message)
        return { success: false, msg: err.message }
    }
}