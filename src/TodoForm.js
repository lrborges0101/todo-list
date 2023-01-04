import React, { useState }  from "react";


function TodoForm(props){

    const [text, setText] = useState("")

            function handleChange(event){
                let t = event.target.value;
                setText(t)
        
                
                    }

              function addItem(event){
                 event.preventDefault()
     
                if(text){ 
                props.onAddItem(text)         
                setText("")}
     
        }

 return(<form >
       <div className="divF">            
             <input onChange={handleChange} type="text" value={text}></input>
            <button onClick={addItem} ><img className="form" src="./assets/add.png"></img></button>
            </div>
            
        </form>)

}

export default TodoForm;