import { Collapse } from "react-bootstrap";//Houyuan
import { MdAssignmentInd,MdLock,MdAndroid } from "react-icons/md";
import { useState } from 'react';
import './loginStyle.css';

function Login() { //login component
    //Bind the form via useState
    const [open,UpdateOpen] = useState(false);
    const [username,UpdateUsername] = useState("");
    const [password,UpdatePassword] = useState("");
    const [resMsg,UpdateRes] = useState("");
    const [nickname,UpdateNickname] = useState("");
    const [regUsername,UpdateRegUsername] = useState("");
    const [regPassword,UpdateRegPassword] = useState("");
    const setUserInfo = (userInfo) => { //Store user login information in browser session
        sessionStorage.setItem("userInfo",JSON.stringify(userInfo))
    }

    const registerHandler = async () => { //call registration api
        try {
            const res = await fetch("http://localhost:8080/api/register",{
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    username: regUsername,
                    password: regPassword,
                    nickname
                })
            })
            const data = await res.json();
            console.log(data)
            UpdateRes(data.data.msg)
        } catch(e) {
            console.log(`Registration failed: \n` + e)
        }
    }

    const clearFormData = () => {
        UpdateNickname("");
        UpdateRegUsername("");
        UpdateRegPassword("");
    }

    const logInHandler = async () => { //call login api
        try {
            const res = await fetch("http://localhost:8080/api/login",{
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })
            const data = await res.json();
            UpdateRes(data.data.msg); //Update login status
            if(data.code === 20000) {
                setUserInfo(data.data)
                window.location.href = "/";
            }
        } catch(e) {
            console.log("Login failed: \n" + e)
        }
    }

    const getLogInResult = () => { //Get the corresponding status of the current interface
        return resMsg;
    }
    return (
      <section>
          <div className="mainWrap">
                <div className={open? 'loginPanel opened': 'loginPanel'}>
                    <div className="logWrap">
                        <h3>LOG IN</h3>
                        <div className="formItem">
                            <MdAssignmentInd style={{ margin: "0 15px" }}/>
                            <input type="text" placeholder="input your account" value={username}  onChange={(e)=>UpdateUsername(e.target.value)}/>
                        </div>
                        <div className="formItem">
                            <MdLock style={{ margin: "0 15px" }}/>
                            <input type="password" placeholder="input your password"  value={password} onChange={(e)=>UpdatePassword(e.target.value)}/>
                        </div>
                        <div className="login" onClick={logInHandler}>SUBMIT</div>
                    </div>
                   <div>
                   <Collapse in={open}>
                       <div>
                       <h3>REGISTER</h3>
                       <div className="formItem">
                            <MdAndroid style={{ margin: "0 15px" }}/>
                            <input type="text" placeholder="input your nickname"  value={nickname} onChange={(e)=>UpdateNickname(e.target.value)}/>
                        </div>
                        <div className="formItem">
                            <MdAssignmentInd style={{ margin: "0 15px" }}/>
                            <input type="text" placeholder="input your account" value={regUsername} onChange={(e)=>UpdateRegUsername(e.target.value)}/>
                        </div>
                        <div className="formItem">
                            <MdLock style={{ margin: "0 15px" }}/>
                            <input type="password" placeholder="input your password"  value={regPassword} onChange={(e)=>UpdateRegPassword(e.target.value)}/>
                        </div>
                        <div className="login" onClick={registerHandler}>SUBMIT</div>
                       </div>
                    </Collapse>
                    <p style={{ color: "red",marginBottom: "0px"}}>{ getLogInResult() }</p>
                    <p onClick={ ()=> { UpdateOpen(!open); clearFormData()}}>{open? 'already have an account? click here': 'do not have an account? register here'}</p>
                   </div>
                </div>
          </div>
      </section>
    );
  }
  
  export default Login;//Houyuan