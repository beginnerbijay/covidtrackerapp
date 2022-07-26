import React,{useState,useEffect}from "react";
import Container from "./Container";
import "./container.css"

function Card() {
  let [state,setstate] = useState("");
  let [states,setstates] = useState("");
  const effect = async() =>{
    try{
    const res = await fetch('https://data.covid19india.org/v4/min/data.min.json');
    const responce = await res.json();
    setstates(responce.AN.meta);
    setstate(responce.AN.total);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    effect();
  },[])
    return (
      <>
      <h1 className="text-center my-3">Live Covid Tracker</h1>
        <div className="row text-center justify-content-center">
          <Container title="Country" ans="India"/>
          <Container title="date" ans={states.date}/>
          <Container title="Population" ans={states.population}/>
          <Container title="Last_updated" ans={states.last_updated}/>
          <Container title="Confirmed" ans={state.confirmed}/>
          <Container title="Deceased" ans={state.deceased}/>
          <Container title="Recoved" ans={state.recovered}/>
          <Container title="Tested" ans={state.tested}/>
          <Container title="Vacinated" ans={state.vaccinated1}/>
        </div>
      </>
    );
  }
  
  export default Card;