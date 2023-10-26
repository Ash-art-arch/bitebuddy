const Card = ()=>{
    return(
        <div className="card">
            <div className="top">
              <i class="ri-heart-line first"></i>
              <p><i class="ri-star-fill"></i>4.5</p>
              <div className="card-images">

              </div>
           
              </div>
              <div className="bottom">
                <h5>Oyester Spaghetti</h5>
                <div className="button-container">
                <p>$5.5</p>
                <button>Add to Cart</button>
                </div>
                
              </div>
            </div>
    );
}
export default Card;