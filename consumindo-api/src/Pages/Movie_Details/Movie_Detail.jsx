
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Recommended } from "../../Components/Recommended";
import useRequestData from "../../Hooks/useRequestData";
import { Image_Path } from "../../Imagem_Path/Image_Path";
import { goToHome } from "../../Routes/coordinator";
import { Api_Key } from "../../Services/Api_Key";
import { YT_URL } from "../../Services/Urls";
import { Container, Player, TituloTrailer } from "./Movie_Detail_styled";




export const Movie_Details = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [trailer] = useRequestData([], `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${Api_Key}&language=pt-BR`)


    const { id } = useParams()
    console.log(id)

    const [detail, setDetail] = useState({})

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${Api_Key}&language=pt-BR`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const { title, poster_path, overview, release_date, video } = data

                const detail = {
                    id,
                    title,
                    sinopse: overview,
                    image: `${Image_Path}${poster_path}`,
                    releseDate: release_date,
                    video: video
                }
                console.log(detail)
                setDetail(detail)
            })



    }, [id])


    const onClick = () => {
        goToHome(navigate)
    }





    return (
        <>
            <Container>
                <div className="movie">
                    <img src={detail.image} alt={detail.sinopse} />
                    <div className="deltails">
                        <h3>{detail.title}</h3>
                        <span className="sinopse">Sinopse: {detail.sinopse}</span><br />

                        <span className="release_date">Release date: {detail.releseDate}</span> <br />
                        <button onClick={() => onClick(navigate)}>Voltar</button>

                    </div>



                </div>


            </Container>

            <div>
                <TituloTrailer>Trailer</TituloTrailer>
                <Player>
                    <iframe
                        src={YT_URL + trailer?.results?.[0]?.key}
                        title={YT_URL + trailer?.results?.[0]?.key}></iframe>
                </Player>


            </div>

            <div>
                <Recommended/>
            </div>

        </>


    )

}

