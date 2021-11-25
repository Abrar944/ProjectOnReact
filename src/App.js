import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
// import Abouts from './Abouts';
import Textform from './Textform';
import Alerts from './Alerts';
import React,{useState} from 'react'

function App() {
const [alert, setAlert] = useState(null)

const Showalert=(message, type)=> {
    setAlert({
        msg: message,
         type : type
    })
}

const [mode, setMode] = useState('dark')

const removecolor =()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
}

  const toggleMode = (cls) => {
      removecolor();
      document.body.classList.add('bg-' +cls)
if (mode ==='light') {
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    document.body.style.color = 'white';
    Showalert("Dark Mode is Enable","Success")
}
else{
    setMode('light');
    document.body.style.color = 'black';
    document.body.style.backgroundColor='White';
    Showalert("Light Mode is Enable","Success")
}
    }
return(
<>
<Navbar  mode ={mode} toggleMode={toggleMode}  />
<Alerts alert = {alert} />
{
 
<div className="container my-3" >
<Textform  heading = " Enter to Convert"   />

</div> }
{/* <Abouts/> */}
</>
);
}
export default App;
