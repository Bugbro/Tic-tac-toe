import React from "react";

const Square= (props)=>{
    return (
        <>
            <div onClick={props.onClick} style={{border:"1px solid", height:"100px", width:"50%", display:"flex", alignItems:"center", justifyContent:"center"}} className={props.classActive ? "click_square square":"square"}>
                <p className="fw-bold cursive-text">{props.value}</p>
            </div>
        </>
    )
}

export default Square;