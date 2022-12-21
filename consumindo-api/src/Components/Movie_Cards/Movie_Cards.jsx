import { format } from 'date-fns';
import { ptBR } from 'date-fns/esm/locale';

export function Movie_Cards(props){

    return(
        <div>
            {props.imagePath ? props.imagePath : ""} 
                {props.title ? props.title : ""}

                {props.dateRelease ? format (
                    new Date(props.dateRelease),
                    "dd MMM yyyy",
                    {locale: ptBR}
                ): ""}
            
        </div>
    )
    
}console.log(Movie_Cards)