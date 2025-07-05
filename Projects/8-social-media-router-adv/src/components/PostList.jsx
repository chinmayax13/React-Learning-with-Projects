import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import EmptyMsg from "./EmptyMsg";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      {fetching && <LoadingSpinner> </LoadingSpinner>}
      {!fetching && postList.length === 0 && (
        <EmptyMsg />
      )}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
}

export default PostList;
