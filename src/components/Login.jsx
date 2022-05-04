
function Login() {
  return (
    <div className="Login">
      <h2>ログイン</h2>
      <form action="post">
          <div className="user__container">
            <input type="text" placeholder="ユーザ名" />
            <input required type="password" placeholder="パスワード" />
            <input required type="password" placeholder="パスワード" />
          </div>
          <input type="submit" />
        </form>
    </div>
  );
}

export default Login;
