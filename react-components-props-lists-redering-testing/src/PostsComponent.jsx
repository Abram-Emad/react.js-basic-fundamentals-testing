function PostsComponent({ postName = "No Title", postBody = "No Body" }) {
  return (
    <div
      style={{
        padding: "10px",
        border: "solid teal 5px",
        background: "#fff",
        margin: "25px",
      }}>
      <h2>{postName}</h2>
      <hr />
      <p>{postBody}</p>
    </div>
  );
}

export default PostsComponent;