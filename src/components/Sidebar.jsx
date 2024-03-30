

// eslint-disable-next-line react/prop-types
function Sidebar({ selectedTab, setSelectedTab }) {


  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: '200px' }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">

        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" key="home" onClick={() => setSelectedTab("home")} >
          <a href="#" className={`nav-link text-white ${selectedTab === "home" && 'active'}`} >
            Home
          </a>
        </li>
        <li key="create_post" onClick={() => {
          setSelectedTab("create_post")
        }}>
          <a href="#" className={`nav-link text-white ${selectedTab === "create_post" && 'active'}`}>

            Create Post
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" style={{}}>
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  );
}


export default Sidebar;
