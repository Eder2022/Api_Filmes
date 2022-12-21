import styled from 'styled-components'

export const CardFilmes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 16em;
`
export const FilmesImg = styled.img`
    width:176px;
    height: 265px;
    border-radius:4px;
    box-shadow: -4px 3px 8px -4px #000000;
&:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s;
}
`
export const TituloFilme = styled.p`
    width:176px;
    font-size: 15px;
    font-weight: bold;
`
export const DataFilme = styled.p`
    font-size: 13px;
    font-weight: bold;
    color: #646464;
    line-height: 0px;
`
export const TituloRec = styled.div`
margin-top: -300px;
    margin-left: 240px;
    font-size: 25px;
    font-weight: bold;
    color:#131313;
`
export const DivRec = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    margin-top:30px;
`
export const ListaFilmes = styled.div`
    width: 73%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin-bottom: 40px;
    row-gap:25px;
`
export const NoTrailer = styled.h1`
  margin-top: 30px;
  text-align: center;
  color: #fe346e;
  font-size: 26px;
  font-weight: 400;
`;

export const Sugestao = styled.div`
    background-color: black;
    margin-left: -8px;
    margin-top: -20px;
`


export const Sug = styled.h2`
    color: white;
    padding-left: 1em;
`