import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

const Main = ({ getPosts, queryPostsError, queryPost, loadingPosts }) => {
  return (
    <div className="flex-grow-1">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              getPosts={getPosts}
              queryPostsError={queryPostsError}
              queryPost={queryPost}
              loadingPosts={loadingPosts}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Main;
