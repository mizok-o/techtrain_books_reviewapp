import axios from 'axios';
import {  useEffect, useState } from 'react';
import '../style/reviewList.css';

function Login() {
  const [booksData, setBooksData ] = useState([])
  useEffect(() => {
    axios.get('https://api-for-missions-and-railways.herokuapp.com/public/books')
      .then((res) => {
       setBooksData(res.data);
      })
  })

  const booksList = booksData.map((item , i) => {
    return (
      <li className="review__item" key={i }>
        <h3 className="review__item__title">{item.title } </h3>
    <p className="review__item__desc">{item.detail}</p><p className="review__item__review">{item.review}</p>
    <button className="review__item__btn">
      <a href={item.url} className="review__item__link">購入</a>
    </button>
      </li>
    )
  })

  return (
    <div className="review">
      <h2 className="review__title">書籍一覧</h2>
      <ul className="review__lists">
        {booksList}
      </ul>
    </div>
  );
}

export default Login;
