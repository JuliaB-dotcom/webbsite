
function ShopProducts(props) {

return(
<div className="products">
  <img src={props.product.imgUrl} />
  <div className="description">
      <h4>{props.product.descrition}</h4>
  </div>
  <div className="productText">
      <h5 className="title">{props.product.title}</h5>
      <h5 className="price">{props.product.price}</h5>
    </div>
  </div>
  )
}
  export default ShopProducts