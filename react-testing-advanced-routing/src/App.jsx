import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import DashboardLayout from "./layout/DashboardLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Post from "./pages/Post";
import NewPost from "./pages/NewPost";
import Error from "./pages/Error";
import DashboardHome from "./pages/DashboardHome";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import ProtectedRoute from "./components/ProtectedRoute";

// const user = null;
const user = {name: 'Abram'}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='post/:id' element={<Post />} />
      <Route path='post/new' element={<NewPost />} />
      <Route
        path='dashboard'
        element={
          <ProtectedRoute user={user}>
            <DashboardLayout />
          </ProtectedRoute>
        }>
        <Route index element={<DashboardHome />} />
        <Route path='users' element={<Users />} />
        <Route path='posts' element={<Posts />} />
      </Route>
      <Route path='*' element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
