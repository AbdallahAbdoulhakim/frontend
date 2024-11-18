import React from "react";
import ArticleCard from "./ArticleCard";
import ArticleListPagination from "./ArticleListPagination";

const ArticlesList = ({ queryPost, getPosts }) => {
  return (
    <div className="mt-2">
      {queryPost.postsList.map((post) => {
        return <ArticleCard key={post.id} post={post} />;
      })}

      <ArticleListPagination queryPost={queryPost} getPosts={getPosts} />
    </div>
  );
};

export default ArticlesList;
