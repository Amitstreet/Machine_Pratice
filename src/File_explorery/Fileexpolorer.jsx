import { React,useContext ,useState, useEffect, Children, createContext } from 'react'
import utils from './utils.js'

import { CommentContent } from '../Context.jsx';

function Fileexpolorer({ id }) {
  const [change, setChange] = useState(false);
  const [comment, setComment] = useState("");
  const [listComment, setList] = useState(utils);

  const handle = () => {
    setChange(!change);
  };


  const {ndata,addcoment,delComment} = useContext(CommentContent);
  

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const add = () => {
     addcoment({id,comment})
  
    // Clear the comment input field
    setComment("");
  };
  

  const del = () => {
     delComment({id})
  };
   
  const parent= ndata[id];



  return (
    <div className="nested-file">
      <div onClick={handle} className="comment-parent">
        {parent.Name || "Unnamed File"}
      </div>
      <div className="comment-controls">
        <input
          value={comment}
          onChange={handleComment}
          placeholder="Add a comment..."
          className="comment-input"
        />
        <button onClick={add} className="add-btn">
          Add
        </button>
        <button onClick={del} className="del-btn">
          Delete
        </button>
      </div>
      {
       change && parent.Children.length > 0 &&
        parent.Children.map((ele,idx) => {
          return <Fileexpolorer  key={idx} id={ele} />

          ;
        })}
    </div>
  );
}

export default Fileexpolorer;
