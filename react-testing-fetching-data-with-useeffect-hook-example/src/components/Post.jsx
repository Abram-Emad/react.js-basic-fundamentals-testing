import React, { useEffect, useState } from "react";

const Post = () => {
  const [post, setPost] = useState(null);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/?_delay=3000`
      );
      const data = await res.json();
      setLoading(false);
      setPost(data);
    };

    if (id !== "") {
      fetchPost();
    }
  }, [id]);
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
