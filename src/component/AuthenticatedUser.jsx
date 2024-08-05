import { useEffect } from 'react'
export default function AuthenticatedUser() {

useEffect(() =>{
  const fetchData = async()=>{
await fetch('https://dummyjson.com/user/me', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}` , 
    }, 
  })
  .then(res => res.json())
  .then(console.log);

}; fetchData()
},[])
  return (
    <div>
    </div>
  )
}
