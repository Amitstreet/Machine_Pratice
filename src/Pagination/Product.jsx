import {React,useState,useEffect} from 'react'
import {get_product} from './utils'
function Peoduct({id}) {



  const [state,setstate]= useState(id);
  const [prod,setprod]= useState([]);


  
  useEffect(()=>
  {
   const get = async ()=>{
   fetch(`https://picsum.photos/v2/list?page=${state}&limit=5`).then((response)=>{
    response.json().then((response)=>{
    setprod([...response]);
    });
   })}

   get();
   },[state])

   console.log(prod);



  





  return (
    <div>
   
    </div>
  )
}

export default Peoduct


