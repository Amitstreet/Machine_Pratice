import React, { useState, useRef } from "react";

const OTPInput = ({ length = 6, onChange }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = useRef([]);
  const handleval=(e,idx)=>{
   
    const {value}= e.target;

    if(isNaN(value))
    {
        return ;
    }
    console.log(value)
    let notp= [...otp];
    notp[idx]=value;
    setOtp(notp)
    console.log(idx)
    if (value && idx < length - 1) {
        inputRefs[idx + 1]?.focus();
      }
  }


  const handlekeydown = (e,idx)=>{
       const {key}= e;
       if(key=='Backspace' && otp[idx]==="")
       { 
       inputRefs[idx-1]?.focus();
       }
  }

   const handlepaste=(e)=>{

      let data= e.clipboardData.getData("text").split("").splice(0,length);
      
      let notp= [...otp];
      data.forEach((ele,idx)=>{
          notp[idx]=ele;
      })
     setOtp(notp);




           
   }



  return (
    <div style={{ display: "flex", gap: "10px" }}            onPaste={(e)=>{handlepaste(e)}}
>
      {otp.map((_, index) => (

        <input

           maxLength={1}
           onChange={(e)=>{
                handleval(e,index);
           }}
           ref={(el)=>{inputRefs[index]=el}}
           value={otp[index]}
           onKeyDown={(e)=>{
            handlekeydown(e,index);
           }}
          style={{
            width: "40px",
            height: "40px",
            textAlign: "center",
            fontSize: "18px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput;
