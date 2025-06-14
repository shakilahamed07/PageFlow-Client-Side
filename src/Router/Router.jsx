import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import ErrorElement from '../Pages/ErrorElement'
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Register/Login';
import Register from '../Pages/Register/Register';
import AllBooks from '../Pages/AllBooks/AllBooks';
import PriveteRoute from './PriveteRoute';
import AddBook from '../Pages/AddBook/AddBook';
import MyBorrow from '../Pages/MyBorrow/MyBorrow';

  export const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayouts,
      errorElement: <ErrorElement></ErrorElement>,
      children:[
        {
          index: true,
          path:'/',
          Component: Home
        },
        {
          path: '/login',
          Component: Login
        },
        {
          path: '/register',
          Component: Register
        },
        {
          path: '/all-books',
          element: <PriveteRoute><AllBooks/></PriveteRoute>
        },
        {
          path: '/add-book',
          element: <PriveteRoute><AddBook/></PriveteRoute>
        },
        {
          path: '/my-borrow',
          element: <PriveteRoute><MyBorrow/></PriveteRoute>
        },
      ]
    },
  ]);