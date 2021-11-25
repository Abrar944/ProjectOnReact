/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-duplicate-props */
// import React,{useState} from 'react'


export default function Navbar(props) {
  
   return (
      <>
      
<nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Textapp</a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}

    {/* <div className="collapse navbar-collapse" id="navbarNav">   
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
         */}
         <div className="d-flex">
         <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px'
        ,width:'30px', cursor: 'pointer'}}></div>
          <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px'
        ,width:'30px', cursor: 'pointer'}}></div>
         <div className="bg-success mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px'
        ,width:'30px', cursor: 'pointer'}}></div>
        <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px'
        ,width:'30px', cursor: 'pointer'}}></div>
</div>
                   <div class="form-check form-switch text-{mode}"  >
  <input  onClick = 'toggle' class="form-check-input" onClick={()=>{props.toggleMode('null')}}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Enbale LightMode</label>
</div>
{/* <button type="button" className="btn btn-primary mx-2" onClick={togglemode} > Copy text</button> */}


</div>
 </nav>
  </>

        
    )
}
//  Name  Mohammed Abrar Ahmed 