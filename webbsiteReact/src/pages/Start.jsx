import troja1 from "/src/images/troja1.jpeg"
import troja2 from "/src/images/troja2.jpeg"
import troja3 from "/src/images/troja3.jpeg"
import '/src/Start.css'


function Start() {
  return (
    <div >
      <div className="startDiv">
      <div className="quoteDiv">
        <h2 className="quote">Reuse the past recycle the present save the future</h2>
      </div>
      
        <div className="flexProducts">
{/* 
          <startProducts
            imgUrl:"",
            text1:,
            imgUrl:"",
            imgUrl:"",
            text2:,
            text3:
          
          
          /> */}
          <div className="img1">
            <img src={troja2} width="150" />
          </div>
          <div className="imgText1">
            <p>titel</p>
            <p>pris</p>
          </div>
          <div className="img2">
          <img src={troja1}  width="100" />
          <img src={troja1}  width="100" />
          </div>
          <div className="text2">
          <div className="imgText2">
            <p>titel</p>
            <p>pris</p>
          </div>
          <div className="imgText2">
            <p>titel</p>
            <p>pris</p>
            </div>
            </div>
          </div>
      
          <div className="img4">
        </div>
        <div className="imgText4">
          <p>titel</p>
          <p>pris</p>
        </div>
        
        <div className="img5">
          <img src={troja2} alt="img1" width="120" />
          <img src={troja2} alt="img1" width="120" />
          <img src={troja2} alt="img1" width="120" />
        </div>
        <div className="text5">
        <div className="imgText5">
          <p>titel</p>
          <p>pris</p>
        </div>
        <div className="imgText5">
          <p>titel</p>
          <p>pris</p>
        </div>
        <div className="imgText5">
          <p>titel</p>
          <p>pris</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Start