const ImageCard = (props) => {
    return ( 
        <>
      <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src={`${props.img}`} alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text">{props.title}</p>
    <p class="card-text">{props.filmid}</p>
    
  </div>
</div>
      </>
     );
}
 
export default ImageCard;