import React from 'react'

export const ImageList = (props) => {
    return (
        <div style={{height:"250px",width:"30px",display:"flex",backgroundColor:"orange",alignItems:"center",justifyContent:"center",padding:"25px",marginBottom:"15px"}}>
         <img src={props.url} alt=""/>
        </div>
    )
}
