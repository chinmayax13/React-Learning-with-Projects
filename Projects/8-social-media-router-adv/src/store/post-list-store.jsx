import { useReducer,useState ,useEffect } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetching:false,
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
  const [fetching,setFetching] = useState(false);

  const addPost = (postObj) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        postObj,
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
      
   },[]);


  return (
    <PostList.Provider
      value={{
        postList,
        fetching,
        addPost,
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
