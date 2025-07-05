import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import EmptyMsg from "./EmptyMsg";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);

  const [fetching,setFetching] = useState(false);

  useEffect(() => {
      setFetching(true);

      const controller = new AbortController();
      const signal = controller.signal;
      
      fetch("https://dummyjson.com/posts", {signal})
      .then((res) => res.json())
      .then((data) => {
      addInitialPosts(data.posts);

      setFetching(false);
      });

      return () =>{
        controller.abort();
      };
      
  },[])

  const handleGetPostClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };
  return (
    <>
      {fetching && <LoadingSpinner> </LoadingSpinner>}
      {!fetching && postList.length === 0 && (
        <EmptyMsg onGetPostsClick={handleGetPostClick} />
      )}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
}

export default PostList;
