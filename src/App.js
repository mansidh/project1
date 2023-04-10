import Login from './components/login/Login';
import Register from './components/Register/Register';
import investor from './components/investor/investor';

import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Router>
          
          <Switch>
            <Route path="/"exact> 
             <Login/>
             
             </Route>

             <Route path="/Register">
             <Register/>
             <Link to='/'>
          
          </Link>
             </Route>

             <Route path="/investor">
             <investor/>
             <Link to='/'>
            
          </Link>
             </Route>
           
            
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
