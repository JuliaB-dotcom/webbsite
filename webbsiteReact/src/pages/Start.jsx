
import img1 from "/src/images/img1.jpeg"
import img2 from "/src/images/img2.jpg"
import art1 from "/src/images/art1.jpg"
import art2 from "/src/images/art2.jpg"
import art3 from "/src/images/art3.jpg"
import '/src/css/Start.css'


function Start() {
  return (
    <div >
      <div className="startDiv">
        <p className="aboutText">Handsydda plagg</p>
        <div className="flexProducts">
          
          <div>
            <img className="img1" src={img1} width="300" />
            <div className="text1">
              <div className="imgText1">
                <p>titel</p>
                <p>pris</p>
              </div>
            </div>
          </div>
          <div>
            <img className="img2" src={img2} width="300" />
            <div className="text2">
              <div className="imgText2">
                <p>titel</p>
                <p>pris</p>
              </div>
            </div>
          </div>
        </div>
        
      <div className="img4Background"></div>
          <div className="img4">
          </div>
        <p className="aboutText2">Akvareller</p>
        <div className="flexProducts2">
          <div>
            <img className="img5" src={art1} width="250" />
            <div className="imgText5">
              <p>titel</p>
              <p>pris</p>
            </div>
          </div>
          <div>
            <img className="img6" src={art2} alt="img2" width="250" />
            <div className="imgText6">
              <p>titel</p>
              <p>pris</p>
            </div>
          </div>
          <div>
            <img className="img7" src={art3} alt="img3" width="236" />
            <div className="imgText7">
              <p>titel</p>
              <p>pris</p>
            </div>
          </div>
        </div>
        
  
      </div>
    </div>
  )
}

export default Start