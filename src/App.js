import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import axios from "axios";
import useWindowSize from "./hooks/useWindowSize";

const App = () => {
  const [search, setSearch] = useState("");
  const backendUrl = "http://localhost:5000/api/";
  const [queryPost, setQueryPost] = useState([]);
  const [queryPostsError, setQueryPostError] = useState("");
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [querySinglePost, setQuerySinglePost] = useState({});
  const [postToDelete, setPostToDelete] = useState("");

  const getPosts = async (search = "") => {
    try {
      setQueryPost([]);
      setLoadingPosts(true);
      const response = await axios.get(`${backendUrl}post/all${search}`);
      const data = response.data;

      if (!data.success) {
        setQueryPostError(data.message);
        return;
      }

      setQueryPost(data.data);
    } catch (error) {
      setQueryPostError(error.message);
    } finally {
      setLoadingPosts(false);
    }
  };

  const getPost = async (id) => {
    try {
      setQuerySinglePost({});
      setLoadingPosts(true);

      const response = await axios.get(`${backendUrl}post/${id}`);
      const data = response.data;

      if (!data.success) {
        setQueryPostError(data.message);
        return;
      }
      setQuerySinglePost(data.data);
    } catch (error) {
      setQueryPostError(error.message);
    } finally {
      setLoadingPosts(false);
    }
  };

  return (
    <div className="d-flex flex-column vh-100">
      <Header search={search} setSearch={setSearch} />
      <Main
        getPost={getPost}
        getPosts={getPosts}
        queryPost={queryPost}
        querySinglePost={querySinglePost}
        queryPostsError={queryPostsError}
        loadingPosts={loadingPosts}
        postToDelete={postToDelete}
        setPostToDelete={setPostToDelete}
      />
      <Footer />
    </div>
  );
};

export default App;
