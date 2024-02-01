import React from 'react';
import './App.css'; 
import Navbar from './Navbar'; 
import Menu from './menu';
import AboutUs from './AboutUs'; // This should match the file name exactly


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Menu />
        {/* ... other sections of your page ... */}
      </main>
      <AboutUs /> {/* This renders the About Us section on the page */}
      {/* More components or content */}
      {/* ... potentially a footer here ... */}
    </div>
  );
}

export default App;


// const App = () => {
//   return (
//     <header className="navbar">
//       <div className="navbar-container">
//         <a href="/" className="logo">Fofood</a>
//         <nav className="navbar-navigation">
//           <a href="/" className="nav-link">Home</a>
//           <a href="/about" className="nav-link">About</a>
//           <a href="/menu" className="nav-link">Menu</a>
//           <a href="/blog" className="nav-link">Blog</a>
//           <div className="navbar-dropdown">
//             <button className="navbar-dropbtn">Pages</button>
//             { <div className="dropdown-content">
//                 <a href="/detail-menu" className="dropdown-item">Detail Menu</a>
//                 <a href="/detail-blog" className="dropdown-item">Detail Blog</a>
//                 <a href="/empty-state" className="dropdown-item">Empty State</a>
//               </div>
//               }
//         {
//           <><a href="/favorites" className="nav-link">My Favorites</a><a href="/cart" className="nav-link">My Cart</a><a href="/contact" className="nav-link contact-us">Contact us</a></>
          
//         }
//         </div>
//         </nav>
//       </div> 
//     </header>
    
//   );
// }
// export default App;
