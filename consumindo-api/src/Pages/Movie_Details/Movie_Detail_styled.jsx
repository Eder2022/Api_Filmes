import styled from "styled-components";


export const Container = styled.div`

margin-left: -8px;




padding: 4rem 0 ;
background-color: black;
h3{
    color: white;
    margin: 1rem;
}

.movie{
    display: flex;
    align-items: center;
    justify-content: center;
}

img{
    width: 300px;
    border-radius: 1rem;
    margin-left: 1rem;

}

.details{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    max-width: 50%;
}

button{
    background-color: #6654da;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: all 0.3s;

}

button:hover{
    background: #5848c2;

}

span{
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%;
}

.release_date{
    opacity: 0.3;
    margin: 1rem;
    color: white;
}

.sinopse{
    margin: 1rem;
    display: flex;
    color: white;
}

.details_icon{
    color: white;
    text-align: right;
    width: 60px;
    height: 60px;
    padding: 6px;
}
`

export const Player = styled.div`
  background-color: black;
  margin-left: -8px;
  
  
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
iframe {
    padding-left: -20px;
  position: absolute;
  top: 20px;
  left: 14%;
  bottom: 0;
  right: 0;
  width: 60%;
  height: 60%;
  border: none;
  border-radius: 5px;
}
`

export const TituloTrailer = styled.div`
    display: flex;
    padding-left: 1em;
    background-color: black;
    color: white;
   
    margin-left: -8px;
    font-size: 25px;
    font-weight: bold;
   
`