export default function RegisterAccount() {
  return (
    <>
      <main className="main-content">
        <section className="login-register-area">
          <div className="container d-flex justify-content-center">
            <div className="login-register-content login-register-pl  ">
              <div className="login-register-title mb-30">
                <h2>Register</h2>
                <p>
                  Create new account today to reap the benefits of a
                  personalized shopping experience.{" "}
                </p>
              </div>
              <div className="login-register-style">
                <form action="#" method="post">
                  <div className="login-register-input">
                    <input
                      type="text"
                      name="user-name"
                      placeholder="Username"
                    />
                  </div>
                  <div className="login-register-input">
                    <input
                      type="text"
                      name="user-name"
                      placeholder="E-mail address"
                    />
                  </div>
                  <div className="login-register-input">
                    <input
                      type="password"
                      name="user-password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="login-register-paragraph">
                    <p>
                      Your personal data will be used to support your experience
                      throughout this website, to manage access to your account,
                      and for other purposes described in our{" "}
                      <a href="#">privacy policy.</a>
                    </p>
                  </div>
                  <div className="btn-style-3">
                    <button
                      className="btn"
                      onclick="window.location.href='my-account.html'"
                      type="button"
                    >
                      Register
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
