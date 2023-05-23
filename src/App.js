
import logo from './logo.svg';
import './App.css';
import ColorDropdownMenue from './component 2/ColorDropdownMenue';
import InputAndButton from './component 2/InputAndButton';


// #1 
import NavBar from './component/NavBar';
import FirstDiv from './component/FirstDiv';
import DivTwo from './component/DivTwo';
import CardNew from './component/CardNew';
import Slider from './component/Slider';
import Counter from './component/Counter';
import { Route } from 'react-router-dom';
import Navigation from './route/index';
import FetchApi from './component 2/FetchApi';
import FetchApiInCard from './component 2/FetchApiInCard';
import Filedata from './fetchdata/userData';

function App() {
  return (
    <div className="App">
<Filedata />
{/* <FetchApi /> */}
{/* <FetchApiInCard /> */}
      {/* #1. Landing page */}
      {/* <NavBar />
      <FirstDiv />
     <DivTwo />
     <div class="container">
    <h4 class="Recommended">Recommended to you</h4>
    <div class="row">
      <div class="col-md-3">
      <CardNew />
      </div>
      <div class="col-md-3">
      <CardNew />
      </div>
      <div class="col-md-3">
      <CardNew />
      </div>
      <div class="col-md-3">
      <CardNew />
      </div>
      <h4>Most Popular</h4>
    <Slider />
    <Counter />

    </div>


     </div> */}

     {/* //3 */}
{/* <ColorDropdownMenue />
<div class='row '>
  <div class="col-4"></div>
  <div class="col-4">
    <h1 clas='text-center'>Counter</h1>
  </div>
</div>
<Counter />
<div class='row '>
  <hr />
  <div class="col-4"></div>
  <div class="col-4">
    <h1 clas='text-center'>Input & Button</h1>
  </div>
</div>
<InputAndButton /> */}

<div class="container">
<Navigation />
</div>
    </div>
  );
}

export default App;
