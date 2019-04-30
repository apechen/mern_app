import React from "react";
import PostList from "./posts/PostList";

const Landing = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Message Board!</h1>
      Log in to post your message
      <PostList />
    </div>
  );
};

export default Landing;
