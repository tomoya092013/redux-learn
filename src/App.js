import React from "react";
// import store from "./store/index";
import Count from "./components/Count";
import { useSelector } from "react-redux";

const App = () => {
  const count = useSelector((state) => state.count);
  const posts = useSelector((state) => state.posts);
  return (
    <div>
      <p>Appのカウント: {count}</p>
      {posts.map((post) => (
        <div key={post.id}>
          {post.id}: {post.title}
        </div>
      ))}
      <Count />
    </div>
  );
};

export default App;
