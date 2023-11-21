import {React,useState} from "react";
import { Link,useNavigate } from "react-router-dom";
function Signup(){
  const navigate=useNavigate();
  const [signupName,setSignupName] = useState('');
    const [signupNumber,setSignupNumber] = useState('');
    const[signupEmail,setSignupEmail]=useState('');
    const [signupPassword, setSignupPassword] = useState('');
    
  const handle=(event)=>{
    if (signupNumber.trim() === '' || signupPassword.trim() === '' || signupEmail.trim()==='' || signupName.trim()==='') {
      alert('Enter valid signup credentials.');
      
    }
    if (signupNumber.trim() !== '' || signupPassword.trim() !== '' || signupEmail.trim()!=='' || signupName.trim()!=='') {
     
      navigate("/");
    }
  }
    return(
        <div>
        <title/>
        <link rel="stylesheet" href="index.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        <div>
          <div className="container-fluid">
            <div className="row no-gutter">
              <div className="bg-image d-none d-md-flex col-md-4 col-lg-6 " />
              <div className="col-md-8 col-lg-6">
                <div className="login d-flex align-items-center py-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-9 col-lg-8 mx-auto">
                        <div className="text-center">
                          <h3 className="login-heading mb-4" align="”center”">Create an account !!</h3>
                        </div>
                        <br></br>
                        <form>
                          <div className="form-label-group">
                            <input type="text" id="inputName" className="form-control" placeholder="ID of Lawyer/Judge" required  value={signupName} onChange={(e) => setSignupName(e.target.value)}/>
                          </div>
                          <br></br>
                          <div className="form-label-group">
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus value={signupEmail}  onChange={(e) => setSignupEmail(e.target.value)}/>
                            
                          </div>
                          <br></br>
                          <div className="form-label-group">
                            <input type="number" id="inputNumber" className="form-control" placeholder="Contact number" required value={signupNumber} onChange={(e) => setSignupNumber(e.target.value)} />
                          </div>
                          <br></br>
                          <div className="form-label-group">
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required value={signupPassword}  onChange={(e) => setSignupPassword(e.target.value)}/>
                           
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                          </div>
                         <button className="buttonlogin" type="submit" onClick={handle}>SIGN UP</button>
                          <div className="text-center">
                            <br></br>
                          <p className="loginp">Already have an account ??<Link to="/login">SIGN IN</Link></p>
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
export default Signup;