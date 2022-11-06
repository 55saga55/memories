import React from 'react';
import Post from './post/Post';
import useStyles from "./styles.js";
import {useSelector}  from "react-redux";

function Posts() {
    const post = useSelector((state)=>state.posts)
    console.log(post)
    const classes = useStyles()
  return (
    <>
    <h1>Posts</h1>
    <Post/>
    <Post/>
    </>
  )
}

export default Posts