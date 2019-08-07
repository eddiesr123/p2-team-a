import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'
import Browse from './Browse'
import UserInfo from './UserInfo'
import Purchase from './Purchase'


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
                <p>More navbar stuff</p>
              </div>
            </nav>
          </header>
          <div id='content'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, minima? Possimus officiis, in numquam debitis ipsa inventore pariatur quae repudiandae omnis tempore, quos earum assumenda! Error ipsum blanditiis quae hic.
            Id recusandae consequatur quam, fugit dignissimos voluptas impedit voluptates dolores velit voluptate iste pariatur corporis dolore blanditiis ut alias aperiam assumenda cupiditate laboriosam laborum cumque perferendis eius accusantium? Consequuntur, ea?
            Itaque rem nam, similique accusantium aliquam voluptatem? Delectus quisquam veniam rerum adipisci accusantium, repellat aperiam quis tempore doloribus quo fugiat at ipsum. Non consectetur eaque optio consequuntur, excepturi hic quae.
            Libero cumque error molestiae minus, repudiandae esse. Pariatur eligendi tempore voluptatum culpa placeat aliquam ducimus velit cumque necessitatibus sit nobis architecto ut hic eius laudantium, voluptas fugit iusto aut error.
            Illum aliquid ex mollitia eum rerum, quam obcaecati dolore porro explicabo doloremque, cum magni ad! Molestiae, id sunt consequuntur officia, rem sint asperiores ut libero accusamus nostrum dolorem natus tempore!</p>
            <Link to="/userinfo/">UserInfo</Link>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, quidem reprehenderit? Dicta necessitatibus possimus dolores harum, nobis quidem incidunt provident recusandae, dolorem reiciendis tempora rem quo ipsum obcaecati officia iusto!
            Magnam asperiores harum alias repellendus beatae, officia sapiente error ratione, accusantium excepturi cum veritatis perferendis repellat unde quo? Unde odio ex quas eaque, recusandae animi libero a ullam eum neque.
            Voluptas, magnam! Aut magni est ducimus omnis soluta. Nobis recusandae dicta fugit corrupti voluptatibus natus est, dolores corporis, maxime incidunt aliquid in quibusdam eaque eligendi atque. Officia ipsam culpa nulla?</p>
            <Route path="/" exact component={Home} />
            <Route path="/browse/" component={Browse} />
            <Route path="/userinfo/" component={UserInfo} />
            <Route path="/purchase/" component={Purchase} />
          </div>
        </div>

      </div>
    </Router >
  );
}

export default AppRouter;