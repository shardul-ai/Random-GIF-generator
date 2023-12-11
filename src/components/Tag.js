import React, {useState } from "react";
import axios from "axios";
import { useEffect } from "react"
import Spinner from "./Spinner";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
 

const [tag,setTag] = useState('');
const [gif,setGif] = useState('');
const [loading,setLoading] = useState('flase');


async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=q2O00fUsMWYh76dV4ybFiMu5pBX30ErO&tag=${tag}`;
    const {data} = await axios.get(url);
    const imageScource = data.data.images.downsized_large.url;
    setGif(imageScource);
    setLoading(false);
}
useEffect( () => {
    fetchData();
},[])




function clickHandler () {
    fetchData();

} 

    return (
        <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[25px]">
            
            <h1 className="mt-[15px] text-2xl underline uppercase font-semibold">Random {tag} Gif</h1>
            
            {
                loading ? (<Spinner/>) :(<img src = {gif} width = "450"/>)
            }
             <input
                className="w-10/12  text-lg padding py-2 rounded-lg mb-[3px] text-center"
                onChange={(event) => {setTag(event.target.value)}}
             />
              
            
         
                      
          
           <button onClick={clickHandler}
            
            className="w-10/12 bg-blue-300 text-lg padding py-2 rounded-lg mb-[20px]">
            
             Generate

            </button>
        </div>
    )
}

export default Tag