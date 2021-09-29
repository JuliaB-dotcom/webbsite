
import troja1 from "/src/images/troja1.jpeg"
import troja2 from "/src/images/troja2.jpeg"
import '/src/Shop.css'
function Start() {

  return (
    <div className="shopContainer">

      <div className="products">
        <img src={troja1} alt="" />
        <img src={troja2} alt="" />
        <div className="description">
          <h4>beskrivning</h4>
        </div>
        <div className="productText">
          <h5 className="title">titel</h5>
          <h5 className="price">pris</h5>
        </div>

      </div>
    </div>

  )

}
export default Start