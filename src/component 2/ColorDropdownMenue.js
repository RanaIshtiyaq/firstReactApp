import React,{useState} from "react";
// import DispalyColor from "./displayColor";
function ColorDropdownMenue() {
    const [Color, SetColor]=useState('Pick a Color');
    function RedResult(){
        SetColor("Red")
    }
    function GreenResult(){
        SetColor("Green")
    }
    function BlueResult(){
        SetColor("Blue")
    }
    
    return (
        
      <div ColorDropdownMenue="App">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    {/* <DispalyColor /> */}
    <button class='btn btn-danger' onClick={RedResult}>Red</button>
    <button class='btn btn-success m-2' onClick={GreenResult}>Green</button>
    <button class='btn btn-primary' onClick={BlueResult}>Blue</button>
    
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <h1 class='text-white text-right'>{Color}</h1>
  </div>
</nav>

</div>
 );
  }
  
  export default ColorDropdownMenue;