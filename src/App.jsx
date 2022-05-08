import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Signup from './components/Signup'
import ReviewLists from './components/ReviewLists'
import PostReview from './components/PostReview'

function App() {
  return (
    <BrowserRouter>
        <h1>書籍レビューアプリ</h1>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reviewLists' element={<ReviewLists />} />
        <Route path='/postReview' element={<PostReview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
