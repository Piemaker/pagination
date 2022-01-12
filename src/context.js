import React, {useState, useContext} from 'react'
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [allPosts, setAllPosts] = useState("");
  //const [posts, setPosts] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [maxPages, setMaxPages] = useState();
  const getPostsRange = ()=>{
    let startingIndex = currentPage * postsPerPage - postsPerPage;
    let endingIndex = currentPage * postsPerPage;
    return allPosts.slice(startingIndex,endingIndex);
  }
  async function getPosts() {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setAllPosts(response.data);
      setMaxPages(Math.ceil(response.data.length / postsPerPage));
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <AppContext.Provider
      value={{ getPosts, isLoading, maxPages, getPostsRange, currentPage, setCurrentPage, setPostsPerPage, setMaxPages, allPosts }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
