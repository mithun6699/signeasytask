import React,{useState,useEffect} from 'react'
import './App.css';
import { UnSplashImages } from './components/UnSplashImages';
import axios from 'axios';
import { Loading } from './components/Loading';

import InfiniteScroll from 'react-infinite-scroll-component'
import SearchImage from './components/SearchImage';
import { Header } from './components/Header';
import requests from './requests'
function App() {
const [images,setImages] = useState([])
const [filteredimages,setfilteredimages] = useState([])




useEffect(()=>{
fetchImages()
},[])


const fetchImages = (count=20)=>{
  const apiUrl = "https://api.unsplash.com//photos/random?client_id="
  const accessKey = "7_3vMLQaq-cRWFvkq2mJwwc7tpeGofkpXvo-jnZqVcM";
  axios.get(`${requests}&count=${count}`)
  .then(res => setImages([...images,...res.data]))

}
useEffect(()=>{
  onSearchsubmit()
  },[])

const onSearchsubmit = async (searchkey)=>{
  const res = await axios.get('https://api.unsplash.com/search/photos',{
    params:{query:searchkey},
    headers:{
      Authorization:'Client-ID 7_3vMLQaq-cRWFvkq2mJwwc7tpeGofkpXvo-jnZqVcM'
    }
  })
  setfilteredimages(res.data.results)
  
}
// console.log(images)
  return (
    <div className="App">
      <Header/>
     <SearchImage userSubmit={onSearchsubmit}/>


  { filteredimages.length>0? <InfiniteScroll dataLength={filteredimages.length}
next={onSearchsubmit}
hasMore ={true}
loader={ <Loading/>
  }>
<UnSplashImages data= {filteredimages}/>

</InfiniteScroll>  : <InfiniteScroll dataLength={images.length}
next={fetchImages}
hasMore ={true}
loader={ <Loading/>
  }>
<UnSplashImages data= {images}/>
</InfiniteScroll> }
 


</div>
   


  
    
  );
}

export default App;
