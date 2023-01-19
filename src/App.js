import React from 'react';
import Transaction from './components/transaction';
import './App.css';


function App() {

  return (
    <div className='ui raised segment'>
    <nav className="navbar bg-dark ui segment inverted">
       <div className="container-fluid">
          <a className="navbar-brand text-white" href={<Transaction />}>
            <img src="https://mir-s3-cdn-cf.behance.net/projects/max_808/00923094264049.Y3JvcCwxNzg5LDE0MDAsMzksMA.png" alt="Logo" width="50" height="50" className="d-inline-block align-text-center"/>
            Bank Of Flatiron
          </a>
       </div>
     </nav>
      <Transaction />
    </div>
    
  );
}

export default App;
