import logo from './logo.svg';
import './App.css';

import Header from './1/header';
import Footer from './1/footer';
import Nav from './1/nav';

function App() {
  return(
    <header>
  
      {/* <Header /> */}

      
      <Nav />
      <Footer />
    </header>
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
};

export default App;
