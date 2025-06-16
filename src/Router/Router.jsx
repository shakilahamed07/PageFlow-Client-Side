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
import Loader from '../Components/Loader';
import axios from 'axios';
import UpdateBook from '../Pages/AllBooks/UpdateBook';
import CategorisBooks from '../Pages/CategorisBooks/CategorisBooks';
import BookDetails from '../Pages/BookDetails/BookDetails';

  export const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayouts,
      errorElement: <ErrorElement></ErrorElement>,
      children:[
        {
          index: true,
          path:'/',
          loader: ()=> fetch(`/category.json`),
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
          hydrateFallbackElement: Loader,
          loader: ()=> axios.get('http://localhost:5000/books'),
          element: <PriveteRoute><AllBooks/></PriveteRoute>
        },
        {
          path: '/update-book/:id',
          hydrateFallbackElement: Loader,
          loader: ({params})=> fetch(`http://localhost:5000/books/${params.id}`),
          element: <PriveteRoute><UpdateBook/></PriveteRoute>
        },
        {
          path: '/add-book',
          element: <PriveteRoute><AddBook/></PriveteRoute>
        },
        {
          path: '/category-books/:id',
          loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`),
          element: <PriveteRoute><CategorisBooks/></PriveteRoute>
        },
        {
          path: '/book-details/:id',
          loader: ({params})=> fetch(`http://localhost:5000/books/${params.id}`),
          element: <PriveteRoute><BookDetails/></PriveteRoute>
        },
        {
          path: '/my-borrow',
          element: <PriveteRoute><MyBorrow/></PriveteRoute>
        },
      ]
    },
  ]);