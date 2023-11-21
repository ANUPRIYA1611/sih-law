import {React,useState} from "react";
import { Link,useNavigate } from "react-router-dom";
function Addcase(){
  const navigate=useNavigate();
  const [signupName,setSignupName] = useState('');
    const [signupNumber,setSignupNumber] = useState('');
    const[signupEmail,setSignupEmail]=useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupName1,setSignupName1] = useState('');
    const [signupNumber1,setSignupNumber1] = useState('');
    const[signupEmail1,setSignupEmail1]=useState('');
  const handle=(event)=>{
    if (signupNumber.trim() === '' || signupPassword.trim() === '' || signupEmail.trim()==='' || signupName.trim()==='') {
      alert('Enter the case to add');
      
    }
    if (signupNumber.trim() !== '' || signupPassword.trim() !== '' || signupEmail.trim()!=='' || signupName.trim()!=='') {
     
      navigate("/login");
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
                          <h3 className="login-heading mb-4" align="”center”">Add case!!</h3>
                        </div>
                        <br></br>
                        <form>
                          <div className="form-label-group">
                            <input type="text" id="inputName" className="form-control" placeholder="Case Title" required  value={signupName} onChange={(e) => setSignupName(e.target.value)}/>
                          </div>
                          <br></br>
                          <div className="form-label-group">
                            <input type="text" id="inputName" className="form-control" placeholder="Case Description" required  value={signupName1} onChange={(e) => setSignupName1(e.target.value)}/>
                          </div>
                          <br></br>
                          <div className="form-label-group">
                            <input type="text" id="inputNumber" className="form-control" placeholder="Status of the case" required value={signupNumber} onChange={(e) => setSignupNumber(e.target.value)} />
                          </div>
                          <br></br>
                          <div className="form-label-group">
                            <input type="text" id="inputNumber" className="form-control" placeholder="Court" required value={signupNumber1} onChange={(e) => setSignupNumber1(e.target.value)} />
                          </div>
                          <br></br>
                          <div className="form-label-group">
                            <input type="text" id="inputEmail" className="form-control" placeholder="Lawyer Handled" required autofocus value={signupEmail1}  onChange={(e) => setSignupEmail1(e.target.value)}/>
                            
                          </div>
                          <br></br>
                          <div className="form-label-group">
                            <input type="text" id="inputPassword" className="form-control" placeholder="Judge Handled" required value={signupPassword}  onChange={(e) => setSignupPassword(e.target.value)}/>
                           
                          </div>
                          <br></br>
                          <div className="form-label-group">
                            <input type="text" id="inputEmail" className="form-control" placeholder="Hearing Date" required autofocus value={signupEmail}  onChange={(e) => setSignupEmail(e.target.value)}/>
                            
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                          </div>
                         <button className="buttonlogin" type="submit" onClick={handle}>ADD THE CASE</button>
                          
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
export default Addcase;