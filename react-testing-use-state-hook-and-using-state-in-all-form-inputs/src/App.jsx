import "./App.css";
import MyButtonComponent from "./MyButtonComponent";
import MyFormComponent from "./MyFormComponent";

function App() {
  return (
    <div
      className='App'
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column",
      }}>
      <MyButtonComponent />
      <MyFormComponent />
    </div>
  );
}

export default App;
