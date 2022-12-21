// import { useEffect } from "react";
// import { useState } from "react";
// import { useParams } from "react-router-dom";

import { Container02, Genre_Button_Styled } from "./Genre_Button_styled";



// export const GenresFilter = ()=>{

//    const {id} = useParams()
    
   
//    const [genres, setgenres ] = useState([]);
//    const [filters, setFilters] = useState([]);
//    const [movie, setMovie] = useState([]);

//    const handleFilterGenres =(event)=>{
//       console.log(event.target.value)

      
         
//    }

//        useEffect(()=>{

//       fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${Api_Key}&language=pt-BR`)
//       .then(response => response.json())
//       .then(data => {

       

//          console.log(data.genres)
//          setgenres(data.genres)
         
         
         
//       })
     
  
//       },[])


//    return (
//       <>
//       <Container02>

     
//       <div className="header">
//          <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
//          <p>Categorias:</p>
      
//       {genres.map((genre)=>{
//          return (
//          <Genre_Button_Styled 
//          key={genre.id}
//          type="button"
        
//          onClick={()=>handleFilterGenres(genres.id)}
        
//          >{genre.name}
         
//          </Genre_Button_Styled>
//          )
        
//       })} </div>
//       </Container02>
//       </>
//    )
// }
           

import React, { useEffect } from "react";
export const Filter = ({ popular, setFiltered, activeGenre, setActiveGenre }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular); //Checks- don't do anything, just return all
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre),
    );
    setFiltered(filtered);
  }, [activeGenre]);
return (

   <Container02>

         <div className="header">
         <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
          <p>Categorias:</p>
    <div className="filter-container">
      <Genre_Button_Styled
        onClick={() => setActiveGenre(0)}
        className={activeGenre === 0 ? "active" : ""}
      >
        Todos
      </Genre_Button_Styled>
      <Genre_Button_Styled
        onClick={() => setActiveGenre(35)}
        className={activeGenre === 35 ? "active" : ""}
      >
        Comédia
      </Genre_Button_Styled>
      <Genre_Button_Styled
        onClick={() => setActiveGenre(28)}
        className={activeGenre === 28 ? "active" : ""}
      >
        Ação
      </Genre_Button_Styled>
      <Genre_Button_Styled
        onClick={() => setActiveGenre(12)}
        className={activeGenre === 12 ? "active" : ""}
      >
        Aventura
      </Genre_Button_Styled>
      <Genre_Button_Styled
        onClick={() => setActiveGenre(16)}
        className={activeGenre === 16 ? "active" : ""}
      >
        Animação
      </Genre_Button_Styled>
      <Genre_Button_Styled
        onClick={() => setActiveGenre(80)}
        className={activeGenre === 80 ? "active" : ""}
      >
        Crime
      </Genre_Button_Styled>
      <Genre_Button_Styled
        onClick={() => setActiveGenre(99)}
        className={activeGenre === 99 ? "active" : ""}
      >
        Documentário
      </Genre_Button_Styled>
      <Genre_Button_Styled
        onClick={() => setActiveGenre(18)}
        className={activeGenre === 18 ? "active" : ""}
      >
        Drama
      </Genre_Button_Styled>
      <Genre_Button_Styled
        onClick={() => setActiveGenre(10751)}
        className={activeGenre === 10751 ? "active" : ""}
      >
        Família
      </Genre_Button_Styled>
      <Genre_Button_Styled
        onClick={() => setActiveGenre(14)}
        className={activeGenre === 14 ? "active" : ""}
      >
        Fantasia
      </Genre_Button_Styled>
      <Genre_Button_Styled
        onClick={() => setActiveGenre(36)}
        className={activeGenre === 36 ? "active" : ""}
      >
        História
      </Genre_Button_Styled>
      <Genre_Button_Styled
        onClick={() => setActiveGenre(27)}
        className={activeGenre === 27 ? "active" : ""}
      >
        Terror
      </Genre_Button_Styled>
      <Genre_Button_Styled
        onClick={() => setActiveGenre(10402)}
        className={activeGenre === 10402 ? "active" : ""}
      >
        Música
      </Genre_Button_Styled>
      <Genre_Button_Styled
        onClick={() => setActiveGenre(9648)}
        className={activeGenre === 9648 ? "active" : ""}
      >
        Mistério
      </Genre_Button_Styled>
      <Genre_Button_Styled
        onClick={() => setActiveGenre(10749)}
        className={activeGenre === 10749 ? "active" : ""}
      >
        Romance
      </Genre_Button_Styled>
      <Genre_Button_Styled
        onClick={() => setActiveGenre(878)}
        className={activeGenre === 878 ? "active" : ""}
      >
        Ficção científica
      </Genre_Button_Styled>
      <Genre_Button_Styled
        onClick={() => setActiveGenre(10770)}
        className={activeGenre === 10770 ? "active" : ""}
      >
        Cinema TV
      </Genre_Button_Styled>
      <Genre_Button_Styled
        onClick={() => setActiveGenre(53)}
        className={activeGenre === 53 ? "active" : ""}
      >
        Thriller
      </Genre_Button_Styled>
      <Genre_Button_Styled
        onClick={() => setActiveGenre(10752)}
        className={activeGenre === 10752 ? "active" : ""}
      >
        Guerra
      </Genre_Button_Styled>
      <Genre_Button_Styled
        onClick={() => setActiveGenre(37)}
        className={activeGenre === 37 ? "active" : ""}
      >
        Faroeste
      </Genre_Button_Styled>
    </div>
    </div>
    </Container02>
  );
};
