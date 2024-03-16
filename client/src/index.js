import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home";
import Layout from "./components/layout";
import ErrorPage from "./pages/errorpage";
import PostDetails from "./pages/postdetails";
import Register from "./pages/register";
import Login from "./pages/login";
import UserProfile from "./pages/userprofile";
import Authors from "./pages/authors";
import CreatePost from "./pages/createposts";
import AuthorPosts from "./pages/authorposts";
import Logout from "./pages/logout";
import CategoryPosts from "./pages/categoryposts";
import EditPost from "./pages/editpost";
import Dashboard from "./pages/dashboard";
import DeletePost from "./pages/deletepost";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts/:id", element: <PostDetails /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "profile/:id", element: <UserProfile /> },
      { path: "authors", element: <Authors /> },
      { path: "create", element: <CreatePost /> },
      { path: "posts/:id/edit", element: <EditPost /> },
      { path: "posts/:id/delete", element: <DeletePost /> },
      { path: "myposts/:id", element: <Dashboard /> },
      { path: "posts/users/:id", element: <AuthorPosts /> },
      { path: "posts/categories/:category", element: <CategoryPosts /> },
      { path: "logout", element: <Logout /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
