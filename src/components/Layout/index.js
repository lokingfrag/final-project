import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';

/**
* @author
* @function Layout
**/

//footer
const Layout = (props) => {
  return(
      <React.Fragment>
          <div className="container">
        {props.children}
        <Sidebar />
    </div>
    <div>
        <h1>-End Of Ur Life- (jk)</h1>
    </div>
      </React.Fragment>
    
   )

 }

export default Layout