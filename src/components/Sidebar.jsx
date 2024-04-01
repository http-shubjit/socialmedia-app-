import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
function Sidebar() {


  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{
      maxWidth: '200px'
    }}>
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">Sidebar</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" key="home" >
          <Link to='/posts' className={`nav-link text-white`} >  Home
          </Link>
        </li>
        <li key="create_post" >
          <Link to="/createpost" className={`nav-link text-white`}>

            Create Post
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <Link to="" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
          <strong>mdo</strong>
        </Link>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" style={{}}>
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div >
  );
}


export default Sidebar;
