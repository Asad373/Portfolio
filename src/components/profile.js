import "./css/Profile.css"
import "./css/social.css"
import "./css/bio.css"
import { ReactComponent as FIcon } from "./img/ico_f.svg";
import { ReactComponent as LinkedIn } from "./img/linkedin.svg";
import { ReactComponent as Twitter } from "./img/twitter.svg";
import { ReactComponent as Github } from "./img/github.svg";
import { ReactComponent as Phone } from "./img/phone.svg";
import { ReactComponent as Email } from "./img/email.svg";
import { ReactComponent as Location } from "./img/location.svg";


const Social = ()=>{
 
return(
   <div class = "mainConatinerS">
      <div class = "box"onClick={()=>{alert("Hello")}}><FIcon></FIcon></div>
      <div class = "box"><LinkedIn></LinkedIn></div>
      <div class = "box"><Twitter></Twitter></div>
      <div class = "box"><Github></Github></div>
   </div>
);
}
const Bio = ()=>{
   return(
      <div class = "bioContainer">
         <div class= "subBox" >
           <div class= "imgbox"><Phone></Phone></div> 
            <div class = "textBox">
               <div class = "heading">Phone: </div>
               <div class ="headingText">+923056927627</div>
            </div>
         </div>
        <hr></hr>
         <div class= "subBox" >
           <div class= "imgbox"><Email></Email></div> 
            <div class = "textBox">
               <div class = "heading">Email: </div>
               <div class ="headingText">mainasad373@gmail.com</div>
            </div>
         </div>

        <hr></hr>
         <div class= "subBox" >
           <div class= "imgbox"><Location></Location></div> 
            <div class = "textBox">
               <div class = "heading">Location: </div>
               <div class ="headingText">Islamabad, Pakistan</div>
            </div>
         </div>
         <hr></hr>
        <div class = "BtnDownloadResumeContainer">
         <div class = "BtnDownload">Download Resume</div>
        </div>
</div>
   )
}
const Profile = ()=>{

    return(
        <div class = "mainContainer">
           <div class = "imageContainer">
            </div>
           <div class = "profileContainer">
            <div class = "name">M.Asad</div>
            <div className="tagLine">FullStack Engineer</div>
            <Social/>
            <Bio/>
            
           </div>
        </div>
    );
}

export default Profile
