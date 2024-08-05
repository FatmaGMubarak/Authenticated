import { useState } from 'react';
import AuthenticatedUser from './component/AuthenticatedUser';


export default function App() {
  const [username,setusername] = useState("")
  const [password,setpassword] = useState("")

const auth = async(uname,pass) =>{
  await fetch('https://dummyjson.com/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      
      username: uname,
      password: pass,
      expiresInMins: 30, // optional, defaults to 60
    })
  })
  .then(res => res.json())
  .then((json) =>localStorage.setItem("token",json.token));
}

  return (
    <div className='content'>
    <form className ="myForm" onSubmit={(e)=>{
      e.preventDefault()
      auth(username,password)
    }}>
<div className="container mb-3 ">
<div className="input-group">
  <span className="input-group-text">USERNAME</span>
  <input type="text" aria-label="First name" className="form-control" value={username} onChange={(e)=>setusername(e.target.value)}/>
</div>

<div className="input-group">
  <span className="input-group-text">PASSWORD</span>
  <input type="password" aria-label="First name" className="form-control"  value={password} onChange={(e)=>setpassword(e.target.value)}/>
</div>
<button type="submit" className="btn btn-secondary">LOG IN</button>
</div>
</form>
</div>
  )
}
