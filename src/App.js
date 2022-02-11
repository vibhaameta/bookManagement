import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
const LoginPage = lazy(() => import('./components/LoginPage'));
const Home = lazy(() => import('./components/Home'));
const AddBook = lazy(() => import('./components/AddBook'));
const BookList = lazy(() => import('./components/BookList'));
const DeleteBook = lazy(() => import('./components/DeleteBook'));
const EditBook = lazy(() => import('./components/EditBook'));
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path='/' element={<LoginPage/>}/>
        <Route exact path='/Home' element={<Home/>}/>
        <Route exact path='/addBook' element={<AddBook/>}/>
        <Route exact path='/bookList' element={<BookList/>}/>
        <Route exact path='/deleteBook' element={<DeleteBook/>}/>
        <Route exact path='/editBook' element={<EditBook/>}/>
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
