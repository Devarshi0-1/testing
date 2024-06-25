import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <main className="main-content">
        <section className="login-register-area">
          <div className="container d-flex justify-content-center align-items-center">
            <div className="login-register-content">
              <div className="login-register-title mb-30">
                <h2>Login</h2>
                <p>
                  Welcome back! Please enter your username and password to
                  login.{" "}
                </p>
              </div>
              <div className="login-register-style login-register-pr">
                <form action="#" method="post">
                  <div className="login-register-input">
                    <input
                      type="text"
                      name="user-name"
                      placeholder="Username or email address"
                    />
                  </div>
                  <div className="login-register-input">
                    <input
                      type="password"
                      name="user-password"
                      placeholder="Password"
                    />
                    <div className="forgot">
                      <a href="#">Forgot?</a>
                    </div>
                  </div>
                  <div className="remember-me-btn d-flex justify-content-between">
                    <div className="remember-me">
                      <input type="checkbox" />
                      <label>Remember me</label>
                    </div>
                    <div className="new-account">
                      <Link to="/register">Don't have an account?</Link>
                    </div>
                  </div>
                  <div className="btn-style-3">
                    <button className="btn" type="button">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
