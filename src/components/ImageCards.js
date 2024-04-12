import ImageCard from "./ImageCard";
import Moviesdata from "../json/Moviedata.json";
const  ImageCards= () => {
    return ( 
        <>
        <div className='d-flex'>
        {Moviesdata.films.map((film) =>{
            return <ImageCard filmid={film.FilmID} title={film.Title} img={film.Image}/>
        })}
        </div>
        </>
     );
}
 
export default ImageCards;