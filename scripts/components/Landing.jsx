import React from 'react';

import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';

class Landing extends React.Component {

  render () {
    return (
      <div>
        <div id="wrap">
        <Navigation />
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-lg-offset-1">
                <div className="flex-video widescreen">
                  <iframe allowFullScreen="" src="https://www.youtube.com/embed/Jj1fhYZJjek?modestbranding=1&autohide=1&showinfo=0&=0&autoplay=1"></iframe>
                </div>
              </div>
              <div className="col-lg-3 text-center">
                <div className="profile-header-img">
                  <img className="img-circle" src="../css/images/featureduser.png" />
                  <div className="rank-label-container">
                    <span className="label label-default rank-label"><i className="fa fa-circle" id="circle1"></i>&nbsp;GreenBrother2</span>
                  </div>
                  <div>
                    <div className="usertaghead">
                      <span className="usertag">#modern</span>
                      <span className="usertag">#smallspace</span>
                    </div>
                    <div className="usertaghead">
                      <span className="usertag">#dormroom</span>
                      <span className="usertag">#local</span>
                    </div>
                    <div className="usertaghead">
                      <span className="usertag">#seasonal</span>
                      <span className="usertag">#fresh</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="morevids">
            <div className="container">
              <div className="row">
                <div className="col-sm-offset-0 col-sm-6 col-md-offset-2 col-md-2">
                  <img className="channelhover img-responsive" src="../css/images/morevids1.jpg" />
                </div>
                <div className="col-sm-6 col-md-2">
                  <img className="channelhover img-responsive" src="../css/images/morevids2.jpg" />
                </div>
                <div className="col-sm-6 col-md-2">
                  <img className="channelhover img-responsive" src="../css/images/morevids3.jpeg" />
                </div>
                <div className="col-sm-6 col-md-2">
                  <img className="channelhover img-responsive" src="../css/images/morevids4.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="trending">
          <div className="text-center container">
            <h1 className="whatstrending">What's Trending</h1>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="panel panel-default trendingtab">
                  <div className="panel-body trendingtab">
                    <p className="lead">Paleo</p>
                  </div>
                <div className="panel-thumbnail"><img src="../css/images/paleo.jpg" className="img-responsive"></img></div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="panel panel-default trendingtab">
                  <div className="panel-body trendingtab">
                    <p className="lead">Pairings</p>
                  </div>
                  <div className="panel-thumbnail"><img src="../css/images/pairings.jpeg" className="img-responsive"></img></div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="panel panel-default trendingtab">
                  <div className="panel-body trendingtab">
                    <p className="lead">Organic</p>
                  </div>
                  <div className="panel-thumbnail"><img src="../css/images/organic.jpeg" className="img-responsive"></img></div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="panel panel-default trendingtab">
                  <div className="panel-body trendingtab">
                    <p className="lead">Vegan</p>
                  </div>
                  <div className="panel-thumbnail"><img src="../css/images/vegan.jpeg" className="img-responsive"></img></div>
                </div>
              </div>
            </div>
            <div className="text-center trendingviewmore">
              <a href="#" className="btn btn-lg btn-default ">View More&nbsp;<i className="fa fa-chevron-right"></i></a>
            </div>
          </div>
        </div>
        <div className="broadcaster">
          <div className="container text-center broadcasterinner">
            <h3>Join the Community</h3>
            <h2>Become a broadcaster</h2>
            <a href="#" className="btn btn-lg btn-default">Start Here&nbsp;<i className="fa fa-chevron-right"></i></a>
          </div>
        </div>
        <div className="socialsection">
          <div className="container kitchnews text-center">
            <h2>Follow the latest Kitch news</h2>
              <div class="row">
            		<button className="btn btn-facebook btn-lg btn3d"><i className="fa fa-facebook-official">&nbsp;</i>Facebook</button>
            		<button className="btn btn-google btn-lg btn3d"><i className="fa fa-google">&nbsp;</i>Google</button>
            		<button className="btn btn-twitter btn-lg btn3d"><i className="fa fa-twitter">&nbsp;</i>Twitter</button>
            		<button className="btn btn-pinterest btn-lg btn3d"><i className="fa fa-pinterest">&nbsp;</i>Pinterest</button>
                <button className="btn btn-tumblr btn-lg btn3d"><i className="fa fa-tumblr">&nbsp;</i>Tumblr</button>
            	</div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    );
  }
}

export default Landing;
