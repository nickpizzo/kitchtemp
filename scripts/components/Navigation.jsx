import React from 'react';

class Navigation extends React.Component {

  render() {
    return (
      <div>
        <nav className="navbar-default" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a href="#" className="pull-left"><img className="logo" src="../css/images/logo.png"></img></a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Find A Channel"></input>
                </div>
                <button type="submit" className="btn btn-default">Go</button>
              </form>


              <ul className="nav navbar-nav navbar-right">
                <li><p className="navbar-text">Already a Member?</p></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span className="caret"></span></a>
                  <ul id="login-dp" className="dropdown-menu">
                    <li>
                      <div className="row">
                        <div className="col-md-12">
                          Login via
                          <div className="social-buttons">
                            <a href="#" className="btn btn-fb"><i className="fa fa-facebook"></i> Facebook</a>
                            <a href="#" className="btn btn-tw"><i className="fa fa-twitter"></i> Twitter</a>
                          </div>
                          or
                          <form className="form" onSubmit={this.handleSignIn}>
                            <div className="form-group">
                              <label className="sr-only">Username</label>
                              <input ref="username" className="form-control" placeholder="Username" required></input>
                            </div>
                            <div className="form-group">
                              <label className="sr-only">Password</label>
                              <input type="password" ref="password" className="form-control" placeholder="Password" required></input>
                              <div className="help-block text-right"><a href="">Forget your password?</a></div>
                            </div>
                            <div className="form-group">
                              <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input type="checkbox"> keep me logged&#8208;in</input>
                              </label>
                            </div>
                          </form>
                        </div>
                        <div className="bottom text-center">
                          New here? <a href="#"><b>Join Us</b></a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navigation;
