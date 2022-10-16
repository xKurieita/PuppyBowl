import React from "react";

const PuppyDetails = (props) => {
    const puppy = props.selectedPuppies
    return(
        <div className="pupCards">
        <div>{puppy.name}</div>
        <div>{<img src={puppy.imageUrl}></img>}</div>
        <div>{puppy.breed}</div>
        <div>{puppy.status}</div>
        <div>{puppy.id}</div>
        
        </div>)

    
}
export default PuppyDetails 