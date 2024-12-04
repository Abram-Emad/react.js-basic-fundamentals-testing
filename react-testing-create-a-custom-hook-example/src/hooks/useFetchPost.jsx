import { useEffect, useState } from "react";

const useFetchPost = () => {
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
  return { id, setId, loading, post };
};

export default useFetchPost;
