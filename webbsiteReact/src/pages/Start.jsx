import troja1 from "/src/images/troja1.jpeg"
import troja2 from "/src/images/troja2.jpeg"
import '/src/Start.css'
function Start() {
  return (
    <div >
      <div className="startDiv">
      <div className="quoteDiv">
        <h2 className="quote">Reuse the past recycle the present save the future</h2>
      </div>
      
      <div className="allProducts">
      <div className="startProduct1">
        <img src={troja2} alt="img1" />
      </div>
      <div className="startText1">
        <p>titel</p>
        <p>pris</p>
      </div>

      <div className="startProduct2">
        <img src={troja1} alt="img2" />
        </div>
      
      <div className="startText2">
        <p>titel</p>
        <p>pris</p>
      </div>
      <div className="startProduct3">
        <img src={troja1} alt="img2" />
        </div>
      <div className="startText3">
        <p>titel</p>
        <p>pris</p>
        </div>

        {/* <hr/> */}
          <div className="background">
        <div className="startProduct4">
          <img src={troja2} alt="img1" />
        </div>
        <div className="startText4">
          <p>titel</p>
          <p>pris</p>
        </div>
          </div>
        <div className="startProduct5">
          <img src={troja2} alt="img1" />
        </div>
        <div className="startText5">
          <p>titel</p>
          <p>pris</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Start