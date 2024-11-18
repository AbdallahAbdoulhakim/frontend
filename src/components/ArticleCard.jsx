import React from "react";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { formatDistance } from "date-fns";

const ArticleCard = ({ post }) => {
  return (
    <div className="card mt-2 mb-2">
      <div className="card-header d-flex d-flex justify-content-between">
        <div className="text-secondary">{`${post.user.lastname.toUpperCase()} ${
          post.user.firstname
        }`}</div>
        <div className="text-secondary">
          {formatDistance(new Date(post.createdAt), new Date(), {
            addSuffix: true,
          })}
          <FaRegClock className="ms-2" />
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">
          {post.body.length < 200 ? post.body : `${post.body.slice(0, 250)}...`}
        </p>
        <Link to="/" className="btn btn-primary me-2">
          View
        </Link>
        <Link to="/" className="btn btn-secondary me-2">
          Update
        </Link>
        <Link to="/" className="btn btn-danger">
          Delete
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
