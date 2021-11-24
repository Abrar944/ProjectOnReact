import React,{useState} from 'react'


export default function Navbar(props) {
  let myStyle ={
    color: props.mode ==='dark'?'white':'black',
    // backgroundColor: props.mode ==='dark'?'black':'black'

  }
   return (
      <>
      
<nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Textapp</a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}

    <div className="collapse navbar-collapse" id="navbarNav">   
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
        </ul>
        </div>
        <div class="form-check form-switch text-{mode}" style = {myStyle} >
  <input  onClick = 'toggle' class="form-check-input" onClick={props.toggleMode}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Enbale LightMode</label>
</div>
{/* <button type="button" className="btn btn-primary mx-2" onClick={togglemode} > Copy text</button> */}


</div>
 </nav>
  </>

        
    )
}
//  Name  Mohammed Abrar Ahmed 