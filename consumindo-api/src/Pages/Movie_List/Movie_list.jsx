import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image_Path } from "../../Imagem_Path/Image_Path";
import { goToDetail } from "../../Routes/coordinator";
import { Api_Key } from "../../Services/Api_Key";
import {Filter} from "../generoFilter/generoFilter";
import {  Container_div, Popular } from "./Movie_list_Styled";


export const Movie_list = ()=>{
    const navigate= useNavigate()
    const [moveis, setMoveis]= useState([]);
    const [popular, setPopular] = useState([]);
    const [filtered, setFiltered] = useState([]); 
    const [activeGenre, setActiveGenre] = useState(0);

    // useEffect(()=>{

    //         fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3c4a1db4ccddd8d83abeb6aa669038be&language=pt-BR&page=1`)
    //         .then(response => response.json())
    //         .then(data => setMoveis(data.results))

            
        
        
        
        
    //     },[])

        useEffect(() => {
            fetchPopular();
          }, []);
        const fetchPopular = async () => {
            const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${Api_Key}&language=pt-BR&page=1`);
            const movies = await data.json();
            console.log(movies);
            setPopular(movies.results);
            setFiltered(movies.results);
          };

        const onClik_Detail = (id)=>{
            goToDetail(navigate, id)
        }

       

    return(
        <>
        <Container_div>
            <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <Popular>
        {filtered.map((movie) => {
          return (<ul key={movie.id}
          onClick={()=>onClik_Detail(movie.id)}>
             <img src={`${Image_Path}${movie.poster_path}`}/>
              <h3>{movie.title}</h3>
         </ul>
          )
        })}
      </Popular>
      </Container_div>

            {/* <Container_div>
                {moveis.map((listaFilmes)=>{
                    return (
                        
                        <ul key={listaFilmes.id}
                         onClick={()=>onClik_Detail(listaFilmes.id)}>
                            <img src={`${Image_Path}${listaFilmes.poster_path}`}/>
                             <h3>{listaFilmes.title}</h3>
                        </ul>
                       
                    )
                })}
            </Container_div> */}
       
        </>
    )
}