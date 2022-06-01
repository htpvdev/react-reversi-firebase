import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Welcome() {
  const [posts, setPosts] = React.useState([]);

  const fetchPost = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    );
    const posts = await response.json();
    setPosts(posts);
  };
  fetchPost();

  return (
    <>
      <div className="App">
      <h1>Learn useEffect</h1>
      <div>
        {
          posts.map((post: {id: number, title: string}) => (
            <div key={post.id}>{post.title}</div>
          ))
        }
      </div>
    </div>
      <h1>Welcome to Game Center!</h1>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/reversi"
      >Reversi</Button>
    </>
  )
}