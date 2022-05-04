// import {setupProxy} from "../setupProxy"

function Signup() {

  // 送信時にユーザ作成APIを呼び出し
  const handleSubmit = () => {

    fetch('http://localhost:8000/books')
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }

  return (
    <div className="signup">
      <div className="signup__container">
        <p onClick={handleSubmit}>サインアップ</p>
        {/* <form onSubmit={handleSubmit}>
          <div className="user__container">
            <input type="text" placeholder="name" />
            <input type="text" placeholder="email" />
            <input required type="password" placeholder="パスワード" />
            {/* <input type="password" placeholder="パスワード再入力" />
          </div>
          <input type="submit" />
        </form> */}
      </div>
    </div>
  );
}

export default Signup;
