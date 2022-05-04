import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Signup from './components/Signup'
import ReviewLists from './components/ReviewLists'

function App() {
  return (
    <BrowserRouter>
        <h1>書籍レビューアプリ</h1>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reviewLists' element={<ReviewLists />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
