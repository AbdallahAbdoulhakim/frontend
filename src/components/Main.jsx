import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Article from "./Article";
import DeleteModal from "./DeleteModal";
import { Modal } from "bootstrap";

const Main = ({
  getPosts,
  queryPostsError,
  queryPost,
  querySinglePost,
  loadingPosts,
  getPost,
  postToDelete,
  setPostToDelete,
}) => {
  const modal = Modal.getInstance("#deleteModal");

  const handleDelete = () => {
    console.log(`Deleted post : ${postToDelete}`);
    modal.hide();
    const backdrop = document.querySelector(".modal-backdrop");
  };

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
              setPostToDelete={setPostToDelete}
            />
          }
        />

        <Route
          exact
          path="/post/:id"
          element={
            <Article
              getPost={getPost}
              queryPostsError={queryPostsError}
              querySinglePost={querySinglePost}
              loadingPosts={loadingPosts}
              setPostToDelete={setPostToDelete}
            />
          }
        />
      </Routes>
      <DeleteModal post={postToDelete} handleDelete={handleDelete} />
    </div>
  );
};

export default Main;
