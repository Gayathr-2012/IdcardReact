import Data from '../json/Data.json'
import Card from './Card';
const Cards = () => {
    return (  
        <>
        <div className='d-flex'>
            {Data.data.map((ele)=>{
               return <Card Title={ele.title} Desc={ele.des} Age={ele.age}/>
            })}
            </div>
        </>
        
    );
}
 
export default Cards;