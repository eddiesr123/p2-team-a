import React from "react";

import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from './Home'
import Browse from './Browse'
import UserInfo from './UserInfo'
import Purchase from './Purchase'
import Checkout from "./Checkout";
import Navbar from "./Navbar";


const notFoundPage = () => { 
  return <div>Not Found</div>
}

function AppRouter() {
  return (
    <Router>
      <div>
        <div className="App">
          <header className="App-header">
            <nav id="nav">
              <div id="nav-container">
                <Link to="/">Home</Link>
                <Link to="/browse/">Browse</Link>
                <Link to="/purchase/">Purchase</Link>
                <Link to="/userinfo/">UserInfo</Link>
                <Link to="/checkout/">Checkout</Link>
                <p>More navbar stuff</p>
                <Navbar />
              </div>
            </nav>
          </header>
          <div id='content'>
            <Route path="/" exact component={Home} />
            <Route path="/browse/" component={Browse} />
            <Route path="/userinfo/" component={UserInfo} />
            <Route path="/purchase/" component={Purchase} />
            <Route path="/checkout/" component={Checkout} />
            <Route component={notFoundPage} />
          </div>
        </div>

      </div>
    </Router >
  );
}

export default AppRouter;