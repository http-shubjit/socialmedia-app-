import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Header from "./components/Header"
import Fotter from './components/Fotter';
import Sidebar from './components/Sidebar';

import PostListProvider from './store/post-list-store';
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <PostListProvider>
      <div className='app-container'>
        <Sidebar />
        <div className='content'>
          <Header />
          <Outlet></Outlet>
          <Fotter />
        </div>
      </div>
    </PostListProvider>
  )
}

export default App
