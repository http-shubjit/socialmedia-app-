import { useContext, useRef } from "react"
import { PostList } from '../store/post-list-store'
import { useNavigate } from "react-router-dom"
function CreatePost() {
  const { addPost } = useContext(PostList)
  const navigate = useNavigate()

  const userIdElement = useRef()
  const titleElement = useRef()
  const bodyElement = useRef()
  const tagsElement = useRef()

  const handleOnsubmit = (event) => {
    event.preventDefault()
    const userId = userIdElement.current.value
    const title = titleElement.current.value
    const body = bodyElement.current.value
    const tags = tagsElement.current.value.split(' ')
    //for clear all
    userIdElement.current.value = ""
    titleElement.current.value = ""
    bodyElement.current.value = ""
    tagsElement.current.value = ""
    addPost(userId, title, body, tags)
    navigate("/posts")

  }


  return (
    <form className="createpost" onSubmit={handleOnsubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">Enter Your User Id *</label>
        <input type="text" className="form-control" id="userId" placeholder="user-99" ref={userIdElement} required />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Enter Post Tittle</label>
        <input type="text" className="form-control" id="title" placeholder="mark zukarbarg" ref={titleElement} required />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">Enter Your Thought on Your Post Tittle</label>
        <textarea rows={10} cols={5} className="form-control" id="body" ref={bodyElement} required />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">enter #tag for this post </label>
        <input type="text" className="form-control" id="tags" placeholder="#" ref={tagsElement} />
      </div>

      <button type="submit" className="btn btn-primary createbutton">Post</button>
    </form>
  )
}

export default CreatePost