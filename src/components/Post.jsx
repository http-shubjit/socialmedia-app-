import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from '../store/post-list-store'
function Post({ post }) {


  const { deletePost } = useContext(PostList)
  return (
    <div className="card post_card" style={{ width: "3orem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>

        <div className="alert alert-primary reaction" role="alert">
          This Post is Reacted By {post.reactions}
        </div>

        {post.tags.map((tag) =>
          (< span className="badge text-bg-secondary hashtag" key={tag} >{tag}</span>)

        )}

      </div>
    </div >
  )
}

export default Post