import React from "react";
import useFetchPost from "../hooks/useFetchPost";

const Post = () => {
  
  const { id, loading, post, setId } = useFetchPost();
  
  return (
    <>
      <div>
        <label htmlFor='id'>Post ID</label>
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          type='text'
          name='id'
          id={id}
        />
      </div>
      <div>{id && loading && "loading...."}</div>
      <div>{!loading && post && JSON.stringify(post)}</div>
    </>
  );
};

export default Post;
