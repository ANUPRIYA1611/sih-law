import React, { useRef,useState } from 'react';
import './Login.css';
import { Link ,useNavigate} from 'react-router-dom';
function Loginpage(){
  const navigate=useNavigate();
  const[signupEmail,setSignupEmail]=useState('');
    const [signupPassword, setSignupPassword] = useState('');
  const handle=(event)=>{
    if (signupPassword.trim() === '' || signupEmail.trim()==='' ) {
      alert('Enter valid signin credentials.');
      
    }
    if (signupPassword.trim() !== '' || signupEmail.trim()!=='') {
     
      navigate("/");
    }
  }
   return(
    <div>
    <title />
    <link rel="stylesheet" href="index.css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
    <div>
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6 big-image" />
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <div className="text-center">
                      <h3 className="login-heading mb-4" align="”center”">Welcome !!</h3>
                    </div>
                    <br></br>
                    <form>
                      <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="ID " required autofocus  value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)}/>
                        
                      </div>
                      <br></br>
                      <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)}/>
                      </div>
                      <button className="buttonlogin" type="submit" onClick={handle}>SIGN IN</button>
                      <div className="text-center">
                        <br></br>
                      <p className="loginp">Don't have an account ??<Link to="/signup">SIGN UP</Link></p>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   );
}
export default Loginpage;