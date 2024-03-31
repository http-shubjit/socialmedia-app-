import { useState } from "react";
import { createContext, useCallback, useEffect, useReducer } from "react"

export const PostList = createContext({
  fetching: false,
  postList: [],
  addPost: () => { },
  deletePost: () => { }
})


const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE") {
    newPostList = newPostList.filter((post) => post.id !== action.payload.post_id)
  }

  else if (action.type === "ADD") {

    newPostList = [...currPostList, action.payload]
  }
  else if (action.type === "ADD_INTIAL_POST") {
    newPostList = action.payload.posts
  }
  return newPostList


}

// eslint-disable-next-line react/prop-types
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, [])
  const [fetching, setFetching] = useState(false)

  const addIntialPost = useCallback((posts) => {
    dispatchPostList({
      type: "ADD_INTIAL_POST",
      payload: {
        posts
      },
    })
  }, [])


  const addPost = useCallback((userId, title, body, tags) => {
    dispatchPostList({
      type: "ADD",
      payload: {
        id: Date.now(),
        userId: userId,
        title: title,
        body: body,
        tags: tags
      }

    })
  }, [dispatchPostList])

  const deletePost = useCallback((post_id) => {
    dispatchPostList({
      type: 'DELETE'
      ,
      payload: {
        post_id: post_id
      }
    })


  }, [dispatchPostList])

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    setFetching(true)
    fetch('https://dummyjson.com/posts', signal)
      .then(res => res.json())
      .then(data => {
        addIntialPost(data.posts)
        setFetching(false)
      }
      );
    return () => {
      controller.abort()
    }

  }, [])

  return <PostList.Provider value={{
    postList, addPost, deletePost, fetching
  }
  }>
    {children}
  </PostList.Provider>
}






export default PostListProvider