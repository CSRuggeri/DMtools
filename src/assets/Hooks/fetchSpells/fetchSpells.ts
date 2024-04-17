
import axios from "axios"

export const useFetch = async (url: string,  )=>{
const response = await axios.get(url)
const data = await Promise.all(
    response.data.results.map(async(mappedData: any)=>{
        const mappedURL = await axios.get("https://www.dnd5eapi.co"+mappedData.url)
        
        return mappedURL 
    }) ) 

    return data
}