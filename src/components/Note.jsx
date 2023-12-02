import React from "react";

function Note(props){
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button class="btn" onClick={()=>{props.click(props.id)}}><i class="fa-solid fa-trash"></i>DELETE</button>
        </div>
    )
}

export default Note