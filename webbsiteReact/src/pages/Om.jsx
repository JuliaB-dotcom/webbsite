import '/src/css/Om.css'
import OmImg from "/src/images/OmImg.jpeg"

function Om() {
  return (
    <div className="OmDiv">
      <div className="OmImgDiv">
   <img className="OmImg" src={OmImg} width="300" />
      </div>
      <div className="textDiv">
      <p className="firstPart">Katarina Berg arbetar med olika material och tekniker som till exempel akvarell, oljepastell,
        tusch, blyerts ock kol. Hon kombinerar gärna tekniker, samt gör collage. Även textila material intresserar.
        Att av gamla handgjorda spetsar genom handsömnad skapa nytt.
        Till exempel vackra klänningar är ytterligare ett uttryck
      </p>
      
      <p className="secondPart">
        Efter ett flertal olika konstkurser, samt KV Konstskola har Katarina
        bland annat arbetat 10 år som bildlärare på högstadiet samt 6 år inom grafiska områden.
        Numera ägnar hon tiden till det konstnärlga skapandet i ateljén i hemmet, det stora vackra, 
        gamla huset beläget 5 mil om Göteborg.
      </p>
    </div>
      </div>
  
  )
}
export default Om