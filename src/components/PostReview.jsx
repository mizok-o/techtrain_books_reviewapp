// import { useEffect, useState } from 'react';
import '../style/postReview.css'

function Login() {
  // const [booksData, setBooksData] = useState([])

  return (
    <div className="post">
      <h2>レビュー投稿</h2>
      <div className="post__container">
        <form method='post' className="post__content">
          <div className="post__item">
            <p className="post__title">
              本のタイトル
            </p>
            <input className='post__item__content' type='text' name='title' required />
          </div>
          <div className="post__item">
            <p className="post__story">
              本のあらすじ
            </p>
            <textarea className='post__item__content post__evalarea' type='text' name='eval' required></textarea>
          </div>
          <div className="post__item">
            <p className="post__eval">評価</p>
            <div>
              <input id="review01" type="radio" name="review" /><label for="review01">★</label>
              <input id="review02" type="radio" name="review" /><label for="review02">★</label>
              <input id="review03" type="radio" name="review" /><label for="review03">★</label>
              <input id="review04" type="radio" name="review" /><label for="review04">★</label>
              <input id="review05" type="radio" name="review" /><label for="review05">★</label>
            </div>
          </div>
          <div className="post__item">
            <p className="post__eval__detail">
              レビューと感想 <br />
            </p>
            <textarea className='post__item__content post__textarea' type='text' name='evalDetail'></ textarea>
          </div>
          <div className="post__item">
            <p className="post__link">
              リンク
            </p>
            <input className='post__item__content post__linkarea' type='text' name='link' />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
