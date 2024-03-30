import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Header from "./components/Header"
import Fotter from './components/Fotter';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import { useState } from 'react';
import PostListProvider from './store/post-list-store';

function App() {

  const [selectedTab, setSelectedTab] = useState("create_post")


  return (
    <PostListProvider>
      <div className='app-container'>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className='content'>
          <Header />
          {selectedTab === "home" ? <PostList /> : <CreatePost />}
          <Fotter />
        </div>
      </div>
    </PostListProvider>
  )
}

export default App
