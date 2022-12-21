import { Routes, Route, BrowserRouter } from "react-router-dom"

import { Movie_Details } from "../Pages/Movie_Details/Movie_Detail";
import { Movie_list } from "../Pages/Movie_List/Movie_list";

const Routas = ()=>{

    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Movie_list/>}/>
                <Route path="/movieDetails/:id" element={<Movie_Details/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routas;