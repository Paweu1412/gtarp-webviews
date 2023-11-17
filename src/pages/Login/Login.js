import './Login.scss';

import { Greeting } from './components/Greeting';

export const Login = () => {
  return (
    <div className="Login">
      <div className="container">
        <div className="header">
          <Greeting />
          <p>Zaloguj się, aby kontynuować</p>
        </div>
        
        <div className="main">
          <input type="text" placeholder="Login" />
          <input type="password" placeholder="Hasło" />

          <div className="remember-me">
            <input type="radio" /> Zapamiętaj mnie
          </div>

          <button className="login">Zaloguj się</button>
        </div>
      </div>
    </div>
  )
}