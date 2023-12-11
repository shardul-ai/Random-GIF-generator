import React from "react";
import axios from "axios";
import { useEffect } from "react"
import { useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=q2O00fUsMWYh76dV4ybFiMu5pBX30ErO`;
//const tagMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=q2O00fUsMWYh76dV4ybFiMu5pBX30ErO&tag=${tag}`;

const useGif = (tag) => {
  const [gif,setGif] = useState('');
  const [loading,setLoading] = useState('flase');


async function fetchData() {
    setLoading(true);
   
    const {data} = await axios.get(tag ? `${url}&tag=${tag}`  : url);
    const imageScource = data.data.images.downsized_large.url;
    setGif(imageScource);
    setLoading(false);
}
 useEffect( () => {
    fetchData();
},[])
    return {gif,loading,fetchData};
}
  
export default useGif