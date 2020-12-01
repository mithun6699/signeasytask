import React,{useState} from 'react'
import { ImageList } from './ImageList'

import './UnSplashImages.css'
export const UnSplashImages = ({data}) => {


    return (
  <div className="unspalshimages">
           
                  
                 
                     {/* <div className="unspalshimages__image-area">
                        <div className="unspalshimages__img">
                       
                        {data.map(i=>(
                            <div 
                           
                            >
                        <img   key={i.id} style={{height:"200px",width:"250px",padding:"8px"}}
                         src={i.urls} alt=""/>
                         <h1   onClick={()=>setlike(!like)}>like</h1>
                         {like ? (<h1>Mithun</h1>): (<h2>Raj</h2>)}
                        </div>
                        
                        ))} 
                         
                       
                         
                        </div>
                        
                  
              
                   

             
        

                    </div>   */}
                    {/* <ImageList all ={data}/> */}
                 
                    
                    {data.map(i=>(
                        <ImageList key = {i.id} ur={i.urls}/>
             
              ))}
                
               
              </div>
              

         
   
       
    )
}
