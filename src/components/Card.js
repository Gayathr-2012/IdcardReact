const Card = (props) => {
    return ( 
        <>
         <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">{props.Title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{props.Desc}</h6>
    <p class="card-text">{props.Age}</p>
   
  </div>
</div>
        </>
     );
}
 
export default Card;