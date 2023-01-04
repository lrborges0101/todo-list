import React, { useEffect, useState } from "react";
import './Todo.css'
import List from './List'
import Item from "./Item";
import TodoForm from "./TodoForm";
import Modal from "./Modal";

const SAVED_ITEMS = "savedItems"

function Todo(){
    
    const [showModal, setShowModal] = useState(false)
    const [items, setItems] = useState([])

    useEffect(() =>{
      
      if(localStorage.getItem(SAVED_ITEMS) == null){
         setItems(JSON.parse(localStorage.getItem(SAVED_ITEMS)))
      }
     },[])
      
      useEffect(() =>{
             localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
      },[items])


      function onAddItem(text){

            let item = new Item(text);
            setItems([...items, item])
            onHideModal();
            
        }


   function del(item){

    let filteredItems = items.filter(it => it.id !== item.id)

    setItems(filteredItems)

   }

  function onDone(item){

    let updateItems = items.map(it => {
     
         if (it.id === item.id){
            it.done = !it.done;
         }

        return it;
    })
     setItems(updateItems)
  }

  function onHideModal(){
    setShowModal(false)
      
   }

 

return (<div className="container">
  <header className="header"> <h1>To Do List!</h1><button onClick={()=>{setShowModal(true)}} className="btnadd">+</button></header>       
   {/* <TodoForm onAddItem={onAddItem} ></TodoForm> */}

     <List onDone={onDone} del={del} items={items} ></List>

   <Modal show={showModal} onHideModal={onHideModal} ><TodoForm onAddItem={onAddItem} ></TodoForm></Modal>
    </div>)

}



export default Todo 