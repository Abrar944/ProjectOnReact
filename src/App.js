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

  const toggleMode = (props) => {
if (mode =='light') {
    setMode('dark');
    document.body.style.backgroundColor='CadetBlue';
    Showalert("Dark Mode is Enable","Success")
}
else{
    setMode('light');
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
