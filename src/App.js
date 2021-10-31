import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
// import Abouts from './Abouts';
import Textform from './Textform';

function app() {
  
return(
<>
<Navbar/>
{
 
<div className="container my-3" >
<Textform  heading = " Enter to Convert"   />

</div> }
{/* <Abouts/> */}
</>
);
}
export default app;
