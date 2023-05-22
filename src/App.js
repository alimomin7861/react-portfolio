import React, { useState } from 'react';
import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js';
import About from './components/About/index.js';
import Projects from './components/Projects/index.js';
import Contact from './components/Contact/index.js';
import Resume from './components/Resume/index.js'

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Header from './components/Header/index';
// import About from './components/About/index';
// import Projects from './components/Projects/index';
// import Contact from './components/Contact/index';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Switch>
//           <Route exact path="/" component={About} />
//           <Route path="/portfolio" component={Projects} />
//           <Route path="/contact" component={Contact} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
