import ShopProducts from "/src/components/ShopProducts.jsx"
import productsData from "/src/productsData.js"
import '/src/css/Shop.css'
function Start() {

//   You could also write like this and after the key add an Products component where the product(the one declared in Products.js)
// is an item. And then we have an array with product components.
  const productList = productsData.map(item => <ShopProducts key={item.id} product={item} />)
  return (
    
    <div className="shopContainer">
      
      {productList}
       
     
      {/* <div className="products">
        <img src={troja1} alt="" />
        <img src={troja2} alt="" />
        <div className="description">
          <h4>beskrivning</h4>
        </div>
        <div className="productText">
          <h5 className="title">titel</h5>
          <h5 className="price">pris</h5>
        </div>

      </div> */}
    </div>

  )

}
export default Start