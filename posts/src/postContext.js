import { useState, useContext, createContext } from "react";

const postContext = createContext();

export const usePostsValue = () => {
  const value = useContext(postContext);
  return value;
};

export const PostContextProvider = ({ children }) => {
  const [savedPosts, setSavedPosts] = useState([]);

  const resetPosts = () => setSavedPosts([]);

  const savePost = (post) => {
    const isSaved = savedPosts.find((p) => p.id === post.id);
    if (isSaved) {
      return alert("Post is already saved.");
    }
    setSavedPosts((prev) => [post, ...prev]);
  };

  // create a function to unsave post here
  const unsavePost = (id) =>{
    const isSaved = savedPosts.findIndex((p) => p.id === id);
    if(isSaved!==-1){
      let newP = savedPosts.filter((_,i)=> i!==isSaved)
      setSavedPosts(newP)
    }
    
  }

  return (
    <postContext.Provider
      value={{ savedPosts, setSavedPosts, resetPosts, savePost,unsavePost }}
    >
      {children}
    </postContext.Provider>
  );
};
