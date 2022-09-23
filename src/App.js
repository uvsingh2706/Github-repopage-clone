
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import UserPage from './container/UserPage';



function App() {
  const username = prompt("Enter a github username")
  return (
  
      <BrowserRouter>
      <Switch>
        <Route path="/:userName" component={UserPage} />
        <Redirect to={`/${username}`} />
      </Switch>
      </BrowserRouter>
         
     
      
 
  );
}

export default App;
