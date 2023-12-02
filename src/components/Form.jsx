import React from "react"

function Form(props){
    let[note,setNote]=React.useState({
        title:"",
        content:""
    })

    let[status,updateStatus]=React.useState(false);

    function handleClick(){
        updateStatus(true)
    }

    
    function handleChange(event){
        const {name,value} =event.target;
        setNote(previous =>{
            return (
                {
                    ...previous,
                    [name]:value
                }
            )
        })
        
    }

    return (
        <div >
            <form>
                {status && <input name="title" placeholder="Title" onChange={handleChange} value={note.title} autoFocus /> }
                
                <textarea name="content" onClick={handleClick} placeholder="Take a note..." rows={status ? "3" : "1"}  onChange={handleChange} value={note.content} />
                
                { status && <button onClick={(event)=>{
                    props.add(note);
                    setNote({title:"",content:""});
                    updateStatus(false);
                    event.preventDefault();
                }}>Add</button> }
            </form>
        </div>
    )
}

export default Form