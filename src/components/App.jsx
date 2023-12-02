import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Form from "./Form";


function App() {

  let [items,updateItems]=React.useState([]);


  function addItem(note){
    updateItems(previous =>{
      return(
        [...previous,{
          title:note.title,
          content:note.content
        }]
      )
    })
  }

  function deleteItems(id){
    updateItems(previous=>{
      return previous.filter((items,index)=>
      {return index!==id}
      )
    })
  }


  return (
    <div>
      <Header />
      <Form add={addItem}/>
      { items.map((elements,index) => <Note click={deleteItems} key={index} id={index} title={elements.title} content={elements.content} />)}
      <Footer />
    </div>
  );
}

export default App;
