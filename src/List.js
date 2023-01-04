import React from "react";


function DoneName(props){
  
    if(props.done){
        return(<img alt="done" src="./assets/feito.png" ></img>)
    }else{
        return(<img alt="undone" src="./assets/icons8-selecionado-24.png" ></img>)
    }


}


function List(props){


    return(<ul>
         
        {props.items.map(item=><li className={item.done?"done item":"item"} key={item.id} >
            {item.text}
            <div className="btn">
            <button onClick={()=>{props.onDone(item)}} > <DoneName done={item.done} ></DoneName></button>
            <button onClick={()=>{props.del(item)}} ><img src="./assets/apagar.png"></img></button>
            </div>
            </li>)}
    
        </ul>)
    
    
    }

    export default List;
