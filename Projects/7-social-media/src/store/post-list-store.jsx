import { useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts:()=>{},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }else if(action.type === "ADD_INITIAL_POSTS"){
    newPostList = action.payload.posts;
  }else if(action.type === "ADD_POST"){
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        views: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        addInitialPosts,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

/*const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "In Bhubaneswar",
    body: "Bhubaneswar is very beutifull and very clean too.",
    views: 2,
    userId: "user-7",
    tags: ["Bhubaneswar", "Smart city"],
  },
  {
    id: "2",
    title: "Going To Goa",
    body: "Summer Vacation in Goa is just wow..",
    views: 15,
    userId: "user-9",
    tags: ["Goa", "Vacation", "enjoying"],
  },
];*/

export default PostListProvider;
