import './App.css';

function App() {
  return (
    <div className="all">
      <div className="navbar">
        <div className="navlogo">
          <a href="./app.js" className="alogo">
            WARNIGO
          </a>
        </div>
        <div className="navp">
        <div className="pages">
          <ul>
            <a href="app.js"><li className="navhome">Home</li></a>
            <a href="./#"><li className="navabout">About</li></a>
            <a href="./#"><li className="navcantact">Cantact</li></a>
            <a href="./#"><li className="navfooter">Footer</li></a>
          </ul>
        </div>
        <div className="buttoms">
          <button className="login">Log in</button>
          <button className="signup">Sign up</button>
        </div>
        </div>
      </div>
    </div>
  );
  
}

export default App;
