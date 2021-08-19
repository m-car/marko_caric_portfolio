import React from 'react';


function MyworkDiv(props) {
    return(
    
    <ul className="list-group">
        {props.myworks.map((item) => (
            <li className="list-group-item" key ={item.id}>
             <h2>{item.name}</h2> 
             <p>{item.description}</p> 
            <a {...item.gitlink}>Github Link</a>
            <a {...item.deployedLink}>Deployed Link</a>
            </li>
            

        ))}
    </ul>
    
    )
}
export default MyworkDiv;