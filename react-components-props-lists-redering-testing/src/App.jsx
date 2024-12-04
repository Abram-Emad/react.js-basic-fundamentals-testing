import "./App.css";
import TheFirsttPageComponent from "./TheFirsttPageComponent";
import HeaderComponent from "./HeaderComponent";
import PostsComponent from "./PostsComponent";
import SideMenuComponent from "./SideMenuComponent";

function App() {
  const posts = [
    {
      id: 1,
      postName: "Hello",
      postBody: "This is the first body",
    },

    {
      id: 2,
      postName: "Hello",
      postBody: "This is the second body",
    },

    {
      id: 3,
      postName: "the third post",
      postBody: "This is the third body",
    },
  ];

  const postsList = posts.map((post) => {
    return (
      <PostsComponent
        key={post.id}
        postName={post.postName}
        postBody={post.postBody}
      />
    );
  });
  return (
    <div className='App'>
      <HeaderComponent />

      {/*       This was a simple test
      <TheFirsttPageComponent /> */}

      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{ width: "60%", display: "flex", justifyContent: "center" }}>
            <div style={{ width: "70%" }}>{postsList}</div>
            <div style={{ width: "30%", marginTop: "25px" }}>
              <SideMenuComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
