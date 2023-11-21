import React from "react";
import "./Home.css";
import {Link} from 'react-router-dom'
function Home(){
      return(
        <div>
            <ul className="main-navi">
<a>

</a>
<a>
  <Link to="/signup">Signup</Link>
</a>
<a>
  <Link to="/login">Login</Link>
</a>
<a>
   <Link to="/about">Our Team</Link>
</a>
<a>
  <Link to="/chat">Consult</Link>
</a>
<a>
  <div>
    <img className="logoimg" src="https://img.freepik.com/premium-vector/law-firm-pillar-logo-design_619119-457.jpg"></img>
  </div>
</a>
</ul>
<div></div>
<div class="search">
        <p className="searcht">Unlocking the potential of your law & justice</p>
       
   <form class="search-container">
    <input type="text" id="search-bar" placeholder="What can I help you with today?"/>
    <a href="#"><img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/></a>
  </form>
   </div>
   {/* <div>
    <img className="searchimg" src="https://indusuni.ac.in/uploads/blogs/iil/Most-Demanding-Law-Specialisation-in-India.gif"></img>
   </div> */}
   
   <br></br><br></br>
        <div className="cardhome">
          <div className="s">
            <h2 className="homep2">CATEGORY</h2>
          </div>
        <section className="homecards">
          <div className="spcard">
           <Link to="/criminal"> <img src="https://media.tenor.com/rX0X1fGqGasAAAAC/crime-scene-investigation.gif" className="surimg"></img></Link>
            <h2>Criminal Cases</h2>
            <p className="catp">Criminal cases involve enforcing public codes of behavior, which are codified in the laws of the state</p>
          </div>
          <div className="spcard">
            <Link to="/civil"><img src="https://static.wixstatic.com/media/298fd7_c257a9bdba7c46b1afc3ca271a858990~mv2.gif/v1/fit/w_320%2Ch_338%2Cal_c%2Cq_80,enc_auto/file.gif" className="surimg"></img></Link>
            <h2>Civil Cases</h2>
            <p  className="catp">Civil cases include lawsuits for money, landlord/tenant matters, breach of contract claims</p>
          </div>
          <div className="spcard">
            <Link to="/family"><img src="https://rossfirm.com/wp-content/uploads/2018/01/Characters_familysplit_sized-1.gif" className="surimg"></img></Link>
            <h2>Family Cases</h2>
            <p  className="catp">Family cases are a type of civil case, but they generally involve issues between parents, and children.</p>
          </div>
        </section>
        </div>
        
        <div>
          <div className="chat">
           <Link to="/chat"><img className="chatimg" src="https://png.pngtree.com/element_our/png_detail/20181229/vector-chat-icon-png_302635.jpg" alt="Avatar"></img></Link> 
          </div>
        </div>
        <h2>Justice is the constant and perpetual will to allot to every man his due</h2>
        <div className="homelaw">
          <div className="homelawcard">
            <h2>ADVOCATE</h2>
            <p className="catp">We work to raise awareness, influence public opinion, and create positive change in various areas such as social justice, human rights, environmental issues, healthcare, education</p>
            <button className="buttonlogin5"><Link to="/lawyer">LAWYERS!</Link></button>
          </div>
          <div className="homelawcard">
            <h2>JUDGES</h2>
            <p className="catp">Judges are impartial legal professionals appointed to preside over court proceedings, ensuring fair and just outcomes based on the law.</p>
            <button className="buttonlogin5"><Link to="/lawyer">JUDGES!</Link></button>
          </div>
        </div>
        <br></br>
        <div className="bigcard">
        <div className="article-card">
          <div className="content">
            <p className="title">Law and justice are the cornerstones of a civilized society, providing the framework for resolving disputes, protecting rights, and maintaining order.At the heart of this system are legal cases, shaping laws, establishing precedents, and upholding justice.</p>
            <br></br>
            <button className="buttonlogin1"><Link to="/add" >Add Cases</Link></button>
          </div>        
          <img src="https://i.pinimg.com/564x/82/b1/71/82b17110b5493cb0d1c14605a9164a92.jpg" />
        </div>
      </div>
      <div>
         
      </div>
      <br></br><br></br><br></br><br></br><br></br>
      <div className="footer-basic">
  <footer>
    
    <ul className="list-inline">
    <li className="list-inline-item">
        <a href="https://lawmin.gov.in/">Law</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Services</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Privacy Policy</a>
      </li>
    </ul>
    <p className="copyright">Justice Consultant © 2023</p>
  </footer>
</div>
</div>
      
      );
}
export default Home;