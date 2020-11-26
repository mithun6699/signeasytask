import React,{useState,useEffect} from 'react'
import './App.css';
import { UnSplashImages } from './components/UnSplashImages';
import axios from 'axios';
import { Loading } from './components/Loading';

import InfiniteScroll from 'react-infinite-scroll-component'
// 7_3vMLQaq-cRWFvkq2mJwwc7tpeGofkpXvo-jnZqVcM
function App() {
const [images,setImages] = useState([])

useEffect(()=>{
fetchImages()
},[])
// https://source.unsplash.com/random
// https://api.unsplash.com/photos/?client_id=
const fetchImages = (count=10)=>{
  const apiUrl = "https://api.unsplash.com//photos/random?client_id="
  const accessKey = "7_3vMLQaq-cRWFvkq2mJwwc7tpeGofkpXvo-jnZqVcM";
  axios.get(`${apiUrl}${accessKey}&count=${count}`)
  .then(res => setImages([...images,...res.data]))

}// console.log(images)
  return (
    <div className="App">
   
<InfiniteScroll dataLength={images.length}
next={fetchImages}
hasMore ={true}
loader={<Loading/>
  }>
<UnSplashImages data= {images}/>
</InfiniteScroll> 


</div>
   


  
    
  );
}

export default App;
