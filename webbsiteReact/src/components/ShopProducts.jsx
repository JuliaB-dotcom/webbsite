
function ShopProducts(props) {

  return (
    <div className="shopDiv">
    <div className="products">

     {/* //Used a nested object (product), where I pas the entire product down as one object,
        // rather than passing down each individual property.That will reduce some further code in Shop.jsx. */}
    <img src={props.product.imgUrl} />
      <div className="container"> 
          <h4 className="description">{props.product.description}</h4>
          <h5 className="productText">{props.product.title} {props.product.price} </h5> 
         
   
    </div>
      </div>
    </div>
  )
}
  export default ShopProducts