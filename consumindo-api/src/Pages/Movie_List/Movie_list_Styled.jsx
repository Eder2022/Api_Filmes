import styled from "styled-components";

export const Container_div = styled.div`

    background-color: black;
    margin-left: -8px;
     @media (max-width: 800px) {
       flex-direction: column;
       justify-content: flex-start;
       padding: 2.125rem 1rem;
    }
        list-style: none;
       
        
        
        
        /* grid-template-columns: repeat(4, 1fr);
        column-gap: 1rem;
        row-gap: 4rem; */
        

     h3{
        margin-top: -20px;
        
        color: white;


        
    }

    img{
      
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
        
    }

    img:hover{
        transform: scale(1.1);
        transition: all 0.3s;
    }

    
`

export const Popular= styled.div`
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`


