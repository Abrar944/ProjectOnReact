import React from 'react'
import { useState } from 'react'
import './App.css';

export default function Textform(promps) {

    let myStyle ={
        color: promps.mode ==='dark'?'white':'white',
        backgroundColor: promps.mode ==='dark'?'black':'#042743'
    
      }
    // Change to upperCase
    const handleupclick = ()=>{
        console.log("Upper case" + text);
     let next = text.toUpperCase();
        setText(next);
        

    }
    // Change to lowercase function
    const handletoclick = ()=>{
        // console.log("Upper case" + text);
     let next = text.toLowerCase();
        setText(next);
        

    }
    // Clear Function
    const handleclrclick = ()=>{
        // console.log("Upper case" + text);
     let next = ' ';
        setText(next);
        

    }
// Copy Function
    const handlecopclick = ()=>{

     let next = document.getElementById('mybox');
     next.select();
    navigator.clipboard.writeText(next.value);
        

    }
    
    const handlechange = (event)=>{
        setText(event.target.value)
    }
    const handleremoclick =()=>{
        let next = text.trim().split(/ +/).join(' ');
        setText(next);
    }

    const [text, setText] = useState('');

    return (
        <div className="container" >
<h1>{promps.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handlechange} id="mybox" rows="8"  ></textarea><br />
<button  disabled = {text.length  === 0} type="button" className="btn btn-primary mx-2 my-2 " onClick={handleupclick} style = {myStyle}> Convert to Upper case</button>
<button  disabled = {text.length === 0}    type="button" className="btn btn-primary mx-2 my-2 " onClick={handletoclick}style = {myStyle}> Convert to Upper case</button>
<button  disabled = {text.length === 0}   type="button" className="btn btn-primary mx-2 my-2 " onClick={handleclrclick}style = {myStyle}> Clear text</button>
<button disabled = {text.length === 0}   type="button" className="btn btn-primary mx-2 my-2 " onClick={handlecopclick}style = {myStyle}> Copy text</button>
<button disabled = {text.length === 0}   type="button" className="btn btn-primary mx-2 my-2 "    onClick={handleremoclick}style = {myStyle} > Remove ExtraSpace</button>
</div>
<div className="container" my-3>   
    <h1>Your Summary</h1>
    <p>{text.split(" ").filter((element)=>{
        return element.length!==0
    }).length}word and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes To read</p>
    <h2>Preview </h2>
    <p>{text}</p>
</div>
        </div>            
    )
}
