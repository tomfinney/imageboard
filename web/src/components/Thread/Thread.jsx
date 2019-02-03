import React from "react";
import Meta from "./Meta";
import Post from "./Post";
import { Link } from "react-router-dom";

export default function Board({ thread, handle }) {
  return (
    <article className="thread">
      <Meta post={thread} handle={handle} />
      <p>{thread.body}</p>
      {thread.totalPosts && (
        <small>
          {thread.totalPosts} replies.{" "}
          <Link to={`/${handle}/${thread.id}`}>Click here</Link> to view.
        </small>
      )}
      {thread.posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </article>
  );
}
