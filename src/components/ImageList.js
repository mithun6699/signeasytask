import React, { useState } from 'react'
import './imageList.css'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
export const ImageList = ({ur,name}) => {
    const [like, setlike] = useState(false)
    const [dislike, setdislike] = useState(false)
    const [imageclick,setImageclick] = useState(false)

   
    return (
     
<div className="imagelist">
       
<div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
<img  
onClick ={()=>setImageclick(!imageclick)}
className={`${imageclick ? "imgonclick": "image"}`}
 src={ur} alt="" />
<ThumbUpAltIcon onClick={()=>setlike(!like)} className=  {`${like ? "likeicon": ""}`}/>
      <ThumbDownIcon  onClick={()=>setdislike(!dislike)} className=  {`${dislike ? "dislikeicon": ""}`}/>
</div>
    
   
    
 
         
      
        </div>
        
  
      
   




        



    )
}
