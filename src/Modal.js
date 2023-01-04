import React, { useState } from "react"
import './Todo.css'

function Modal(props){

  const [show, setShow] = useState(true)

function hideModal(e){
    let target = e.target;
   
    if(target.id == "Modal"){
       props.onHideModal()
   
    }

}

return(<div id="Modal" onClick={hideModal} className={props.show?"Modal":"Modal hide"} >

      <span>{props.children}</span>

</div>)
   
       
}

export default Modal