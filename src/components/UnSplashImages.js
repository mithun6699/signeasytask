import React,{useState} from 'react'

import './UnSplashImages.css'
import gt from '../../src/me.jpg'
export const UnSplashImages = ({data}) => {

    const [like, setlike] = useState(false)
    const [but, setbut] = useState(false)
    return (
  <div className="unspalshimages">
           
                  
                    <h1 style={{padding:"8px"}}>SignEasy Task</h1>
                    <div className="unspalshimages__image-area">
                        <div className="unspalshimages__img">
                            {/* <h1>raj</h1> */}
                        {data.map(i=>(
                            <div style={{display:"flex",flexDirection:"column"}}>
                        <img  style={{height:"200px",width:"250px",padding:"8px"}}onClick = {()=>setbut(!but)}  src={i.urls.regular} alt=""/>
                        <h1>Like</h1>
                        </div>
                        ))} 
                        </div>
                  
              

             
        

                    </div>
{/*                    
                    {data.map(i=>(
                        <ImageList url={i.urls.thumb}/>
             
              ))}
               */}
               
                  {/* <h1 onClick={()=>setlike(!like)} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Mithun</h1> */}
              {/* {like ? <h1>U clicked</h1>:<h1>U didn't like</h1>} */}
              </div>
              

         
   
       
    )
}