<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React, { useState } from "react"

const Data=[
    {
        id: 1,
        name: "ABC",
        email: "abc@gmail.com",
        password: "12"
    },
    {
        id: 2,
        name: "DEF",
        email: "def@gmail.com",
        password: "1234"
    },
    {
        id: 3,
        name: "GHI",
        email: "ghi@gmail.com",
        password: "123456"
    }
]

const App=()=>{
    const [email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const [userError, setUserError]=useState(false);
    const [passwordError, setPasswordError]=useState(false);
    const [login, setLogin]=useState(false);

   function loginFun(e){
    e.preventDefault();
     setTimeout(()=>{
       for(let i=0;i<Data.length;i++){
            if(email===Data[i].email){
                if(password!==Data[i].password){
                    setPasswordError(true);
                    setUserError(false)
                    setLogin(false);
                    return;
                }else{
                    setPasswordError(false);
                    setUserError(false)
                    setLogin(true);
                    return;
                }
            }else{
                setUserError(true);
                setPasswordError(false);
                setLogin(false);
                // console.log(Data[i].email,  Data[i].password);
            }
        }
     },3000)
   }
     
    return (<div>
           <form onSubmit={(e)=>loginFun(e)}>
            <input type="email" placeholder="Email" id="input-email" value={email} onChange={e=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" id="input-password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <button type="subbmit" id="submit-form-btn">submit</button>
           </form>
           <p id="user-error">{userError ? "User not found" : ""}</p>
           <p id="password-error">{passwordError ? "Password Incorrect": ""}</p>
           <p>{login ? "Login Successfull" :""}</p>
    </div>)
}
export default App;
