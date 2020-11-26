import React,{useState,useEffect} from 'react'
import './App.css';
import { UnSplashImages } from './components/UnSplashImages';
import axios from 'axios';


// 7_3vMLQaq-cRWFvkq2mJwwc7tpeGofkpXvo-jnZqVcM
function App() {
const [images,setImages] = useState([])

useEffect(()=>{
  const apiUrl = "https://api.unsplash.com/photos/?client_id="
  const accessKey = "7_3vMLQaq-cRWFvkq2mJwwc7tpeGofkpXvo-jnZqVcM";
  axios.get(`${apiUrl}${accessKey}&count=10`)
  .then(res => setImages([...images,...res.data]))
},[])
// console.log(images)
  return (
    <div className="App">
   



<UnSplashImages data= {images}/>




{/* <UnSplashImages data= {images}/>
<UnSplashImages data= {images}/>
<UnSplashImages data= {images}/>
<UnSplashImages data= {images}/>
<UnSplashImages data= {images}/>
<UnSplashImages data= {images}/> */}
</div>
   


  
    
  );
}

export default App;
