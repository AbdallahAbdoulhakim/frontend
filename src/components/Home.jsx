import React, { useEffect } from "react";
import ArticlesList from "./ArticlesList";
import ErrorAlert from "./ErrorAlert";
import Loading from "./Loading";

const Home = ({ getPosts, queryPost, queryPostsError, loadingPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);

  console.log(loadingPosts);

  return (
    <div className="container d-flex flex-column justify-content-center">
      {queryPost?.postsList?.length && (
        <ArticlesList postsList={queryPost.postsList} />
      )}

      {loadingPosts && <Loading />}

      {queryPostsError && <ErrorAlert message={queryPostsError} />}

      <Loading />
    </div>
  );
};

export default Home;
