import { useParams } from "react-router-dom"
import UseRequestData from "../Hooks/useRequestData"
import { Api_Key } from "../Services/Api_Key"
import { IMG_URL } from "../Services/Urls"
import { CardFilmes, DataFilme, DivRec, FilmesImg, ListaFilmes, TituloFilme, TituloRec, Sugestao, Sug } from "./Recommended_Styled"




export const Recommended =()=>{
    
    const params = useParams()
    const [recommendations] = UseRequestData([], `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=${Api_Key}&language=pt-BR`)

    const recommendationsMovie = recommendations?.results && recommendations?.results.map((movie) => {
        return (
           
            <CardFilmes  key={movie.id} movie={movie}>
                <FilmesImg src={IMG_URL + movie.poster_path} />
                <TituloFilme>{movie.original_title}</TituloFilme>
                <DataFilme>{movie.release_date.split('-').reverse().join('/')}</DataFilme>
            </CardFilmes>
        )
    })
    return(
        <>
         <Sugestao >
            <Sug>Sugestões...</Sug>
            <TituloRec>Recomendações</TituloRec>

            <DivRec>
                <ListaFilmes>
                    {recommendationsMovie?.slice(0, 6)}
                </ListaFilmes>
            </DivRec>
        </Sugestao>
        </>
    )
}