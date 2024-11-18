import React from "react";
import ArticleCard from "./ArticleCard";

const ArticlesList = ({ postsList }) => {
  return (
    <div className="mt-2">
      {postsList.map((post) => {
        return <ArticleCard key={post.id} post={post} />;
      })}
    </div>
  );
};

export default ArticlesList;
