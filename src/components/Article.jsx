import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "./Loading";
import ErrorAlert from "./ErrorAlert";

import { format } from "date-fns";

const Article = ({
  querySinglePost,
  getPost,
  queryPostsError,
  loadingPosts,
  setPostToDelete,
}) => {
  const { id } = useParams();

  useEffect(() => {
    getPost(id);
  }, []);

  return (
    <div className="container d-flex flex-column justify-content-center mt-3 mb-3">
      {loadingPosts && <Loading />}

      {queryPostsError && <ErrorAlert message={queryPostsError} />}

      {Object.keys(querySinglePost).length && (
        <article>
          <h2>{querySinglePost.title}</h2>
          <p>
            {format(new Date(), "PPPP")} by{" "}
            {`${querySinglePost.user.lastname.toUpperCase()} ${
              querySinglePost.user.firstname
            }`}
          </p>
          <hr />

          <p>{querySinglePost.body}</p>
          <hr />

          <Link to="/" className="btn btn-secondary me-2">
            Update
          </Link>
          <Link
            to="/"
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#deleteModal"
            onClick={(e) => setPostToDelete(querySinglePost.id)}
          >
            Delete
          </Link>
        </article>
      )}
    </div>
  );
};

export default Article;
