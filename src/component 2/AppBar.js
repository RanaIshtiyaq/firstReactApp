import { Link } from "react-router-dom";
function AppBar(){
    return(
<div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
  <a class="navbar-brand ml-2" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active text-danger" href="#"><Link to='/home'>Home</Link></a>
      {/* <a class="nav-item nav-link" href="#"><Link to='/about'>About</Link></a>
      <a class="nav-item nav-link" href="#"><Link to='/regiter'>Register</Link></a>
      <a class="nav-item nav-link" href="#"><Link to='/formik'>Formik</Link></a> */}
        <a class="nav-item nav-link active text-danger" href="#"><Link to='/post'>Post</Link></a>
    </div>
  </div>
</nav>

</div>

    );

}
export default AppBar;

