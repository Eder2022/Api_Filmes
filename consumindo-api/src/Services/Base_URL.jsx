import axios from "axios"


const Base_URL = 'https://api.themoviedb.org/3/'

export const api = axios.create({
   
    base_url: Base_URL

})



