import troja1 from "/src/images/troja1.jpeg"
import troja2 from "/src/images/troja2.jpeg"
import img1 from "/src/images/img1.jpeg"
import img2 from "/src/images/img2.jpg"
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
            <img src={img1} width="300" />
          </div>
          <div className="text1">
          <div className="imgText1">
            <p>titel</p>
            <p>pris</p>
            </div>
          </div>
          <div className="img2">
            <img src={img2} width="300" />
          {/* <img src={troja1}  width="100" />
          <img src={troja1}  width="100" /> */}
          </div>
          <div className="text2">
          <div className="imgText2">
            <p>titel</p>
            <p>pris</p>
          </div>
          {/* <div className="imgText2">
            <p>titel</p>
            <p>pris</p>
            </div> */}
            </div>
          </div>
      
          <div className="img4">
        </div>
        {/* <div className="imgText4">
          <p>titel</p>
          <p>pris</p>
        </div> */}
        
        <div className="img5">
          <img src={troja2} alt="img1" width="200" />
          <img src={troja2} alt="img1" width="200" />
          <img src={troja2} alt="img1" width="200" />
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