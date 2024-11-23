import {React,useState} from "react";

const App = () => {
      
    const [data,setdata]= useState("");
    const [todo,settodo]= useState([]);
    const [editd,setedit]= useState(false);
    const [id,setid]= useState(0);
    const handle=(e)=>{
        setdata(e.target.value);
        
    }
   const add=()=>{
    if(editd)
    {
       let ntodo =  todo.map((ele)=>{
           if(ele.id==id)
           {
              ele.data=data;  
              return ele;            
           }
           return ele;
        })
        settodo(ntodo);
        setdata("");
        setedit(false);
    }
    else
    {
      if(data)
       {
       settodo([...todo,{id: new Date(),isdone:false,data:data}])
       }
       setdata("");
    }
   }
   const delate=(id)=>{
     let ntodo= todo.filter((ele)=>{
        return ele.id!=id;
      })
      settodo(ntodo);
   }

   const edit=(id)=>{
     setedit(true);
     setid(id);
     let data= todo.filter((ele)=>{
        return ele.id==id;
     })
     setdata(data[0].data);
   }  
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>React Todo App</h1>

            {/* Input Section */}
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    onChange={handle}
                    value={data}
                    placeholder="Add or Edit a task..."
                    style={{ padding: "10px", width: "300px" }}
                />
                <button
                    style={{
                        marginLeft: "10px",
                        padding: "10px",
                        background: "green",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                    }}
                    onClick={add}
                >
                   {editd?"edit":"add"}
                </button>
            </div>

            {/* Todo List */}

         {  todo.length==0 ? <h1>bo todo</h1> : todo.map((ele,idx)=>{
          
           return <ul style={{ listStyle: "none", padding: 0 }}>
            <li
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "10px 0",
                    padding: "10px",
                    background: "#f0f0f0",
                    borderRadius: "5px",
                }}
            >
                <span
                    style={{
                        cursor: "pointer",
                        color: "black",
                    }}
                >
                    {ele.data}
                </span>
                <div>
                    <button
                        style={{
                            marginRight: "10px",
                            background: "orange",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            padding: "5px 10px",
                            cursor: "pointer",
                        }}
                        onClick={(e)=>{ 
                            edit(ele.id)} }
                    >
                        Edit
                    </button>
                    <button
                        style={{
                            background: "red",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            padding: "5px 10px",
                            cursor: "pointer",
                        }}

                        onClick={()=>{delate(ele.id)} }
                    >
                        Delete
                    </button>
                </div>
            </li>
           
        </ul>

         })}
        </div>
    );
};

export default App;
