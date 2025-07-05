import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();

  const userIdEl = useRef();
  const postTitleEl = useRef();
  const postBodyEl = useRef();
  const reactionsEl = useRef();
  const tagsEl = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdEl.current.value;
    const postTitle = postTitleEl.current.value;
    const postBody = postBodyEl.current.value;
    const reactions = reactionsEl.current.value;
    const tags = tagsEl.current.value.split(" ");

    userIdEl.current.value = "";
    postTitleEl.current.value = "";
    postBodyEl.current.value = "";
    reactionsEl.current.value = "";
    tagsEl.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        views: reactions,
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
      });
      navigate("/");
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          ref={userIdEl}
          className="form-control"
          id="userId"
          placeholder="Enter your User Id..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleEl}
          className="form-control"
          id="title"
          placeholder="How are you feeling..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyEl}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about your day.."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          No of Reactions
        </label>
        <input
          type="text"
          ref={reactionsEl}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Your HashTags
        </label>
        <input
          type="text"
          ref={tagsEl}
          className="form-control"
          id="tags"
          placeholder="Enter tags using space..."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreatePost;
