import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("johndoe@email.com");
  const [password, setPassword] = useState("johndoe123");
  return (
    <div className={style.page}>
      <div className={style.card}>
        <header className={style.header}>
          Student <span>Login</span>
        </header>

        <label className={style.label}>Email</label>
        <input
          className={style.input}
          type="email"
          value={email}
          placeholder="Enter your email"
        />

        <label className={style.label}>Password</label>
        <input
          className={style.input}
          type="password"
          value={password}
          placeholder="Enter your password"
        />

        <Link to="/dashboard">
          <button className={style.btn}>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
