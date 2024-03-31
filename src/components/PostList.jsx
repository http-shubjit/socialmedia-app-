import { useContext } from 'react'
import Post from './Post'
import { PostList as PostListData } from '../store/post-list-store'
import Welcome from './Welcome'
function PostList() {
  const { postList, fetching } = useContext(PostListData)


  return (
    <>
      {
        fetching ?
          <div className="d-flex justify-content-center spinner">
            <div className="spinner-border" role="status">
            </div>
          </div> : <>
            {postList.length === 0 && <Welcome />}

            {postList.map((post, index) => <Post
              post={post}
              key={index}
            />)}



          </>


      }

    </>
  )
}

export default PostList