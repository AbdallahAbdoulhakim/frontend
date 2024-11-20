import React, { useEffect } from "react";
import ArticlesList from "./ArticlesList";
import ErrorAlert from "./ErrorAlert";
import Loading from "./Loading";

const Home = ({
  getPosts,
  queryPost,
  queryPostsError,
  loadingPosts,
  setPostToDelete,
}) => {
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container d-flex flex-column justify-content-center">
      {queryPost?.postsList?.length && (
        <ArticlesList
          queryPost={queryPost}
          getPosts={getPosts}
          setPostToDelete={setPostToDelete}
        />
      )}

      {loadingPosts && <Loading />}

      {queryPostsError && <ErrorAlert message={queryPostsError} />}
    </div>
  );
};

export default Home;
