import {React,useState,useEffect} from 'react'
import Peoduct from './Product';

 function Pagination() {
 const[id,setid]= useState(1);
 let arr = [];
 let start_idx= id-4;
 let end_idx= id+2;
 if(start_idx<=0)
 {
  start_idx=0;
 } 
 for(let i=start_idx;i<=end_idx;i++)
 {
      arr.push(i+1);
 }


  return (
    <div>
      <Peoduct  id={id}/>
     <div className="Pagination-btn">
      <button  disabled={id==1}  onClick={()=>{
        setid(id-1);
      }}>prev</button>
      {arr.map((ele,idx)=>{
        return <span  onClick={()=>{
          setid(ele)
        }} className={ele==id?"bold":"normal"} >{ele}</span>
      })}
      <button   onClick={()=>{
        setid(id+1);
      }}>next</button>
     </div>
    </div>
  )
}

export default Pagination
