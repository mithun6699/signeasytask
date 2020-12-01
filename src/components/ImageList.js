import React, { useState } from 'react'
import './imageList.css'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
export const ImageList = ({ur}) => {
    const [like, setlike] = useState(false)
    const [dislike, setdislike] = useState(false)

   
    return (
     
<div className="imagelist">
       
<div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
<img  style={{height:"200px",width:"250px",padding:"18px"}}  src={ur} alt="" />
<ThumbUpAltIcon onClick={()=>setlike(!like)} className=  {`${like ? "likeicon": ""}`}/>
      <ThumbDownIcon  onClick={()=>setdislike(!dislike)} className=  {`${dislike ? "dislikeicon": ""}`}/>
</div>
    
   
    
 
         
      
        </div>
        
  
      
   




        



    )
}
