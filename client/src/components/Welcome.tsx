import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const { REACT_APP_BACKEND_URL } = process.env

export default function Welcome() {
  const [apiTest, setApitest] = React.useState({});

  useEffect(() => {
    // useEffect自体ではasyncの関数を受け取れないので内部で関数を定義して呼び出す。
    const fetchPost = async () => {
      console.log(REACT_APP_BACKEND_URL as string + '/letsgogo')
      const response = await fetch(REACT_APP_BACKEND_URL as string + '/letsgogo');
      const responseJson = await response.json();
      console.log(responseJson)
      setApitest(responseJson);
    };
    fetchPost();
}, []);


  return (
    <>
      <h1>Welcome to Game Center!</h1>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/reversi"
      >Reversi</Button>

      <div className="App">
        <h1>Learn useEffect</h1>
        <div>{JSON.stringify(apiTest)}</div>
      </div>
    </>
  )
}