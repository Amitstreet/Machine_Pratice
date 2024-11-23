import {createContext,React,useState} from 'react'
import Data from './File_explorery/utils';
export  const CommentContent= createContext();

function FileContext({children}) {

  const[ndata,setdata]= useState(Data);
  const addcoment = ({id,comment}) => {
        const obj = {
          id: Date.now(),
          parentId: id,
          Name: comment,
          Children: [],
        };
        const nlist = { ...ndata };
        nlist[obj.id] = obj;
              nlist[id] = {
          ...nlist[id],
          Children: [...nlist[id].Children, obj.id],
        };
              setdata(nlist);
      };

      const delComment=({id})=>{
        let udata= {...ndata};
        let parent= udata[udata[id].parentId];
        console.log(parent)
         parent.Children= parent.Children.filter((ele)=>{
            return ele !=id;
         })
         let queue= [id];
         while(queue.length>0)
         {
            let curid= queue.shift();
            if(udata[curid].children)
            {
                queue.push(udata[curid].children)
            }
            delete udata[curid];
         }
         setdata(udata);
      }

      

  return (
   
    <CommentContent.Provider
    value={{ ndata, addcoment ,delComment}}
  >
    {children}
  </CommentContent.Provider>
  )
}

export default FileContext