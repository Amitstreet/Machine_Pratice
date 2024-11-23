import React from 'react'

function Helper({item,index,setActiveIndex,open}) {

    const handle=()=>{
        setActiveIndex(index);
    }


  return (
    
<div className="accordion-item" key={index}>
          <button
            className="accordion-header"
            onClick={handle}
          >
            {item.title}
          </button>
          <div
          >
          { open && <p>{item.content}</p>}
          </div>
        </div>
  )
}

export default Helper