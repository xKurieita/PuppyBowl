import React from "react";
import Navbar from "./Navbar";
import {useState, useEffect} from "react";
import Fetch from "./Fetch";

const Main = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        async function getData() {
            let response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-Et-WEB-FT/players")
           console.log(response)
            let jasonData = await response.json()
            setData(jasonData)
            console.log(jasonData)
        }
        getData()
    },[])

  return (
    <div id="main">
      <Navbar />
  </div>
  );
  }  

export default Main;
