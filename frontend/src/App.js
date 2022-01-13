import './App.css';
import Main from './components/Main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import DetailRestaurant from './components/DetailRestaurant/DetailRestaurant';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';
import AddRest from './components/AddRest/AddRest';
import EditRest from './components/EditRest/EditRest';
import Favourites from './components/Favourites/Favourites';
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <h1>Welcome</h1>
          </Route>
          <Route exact path="/restaurants">
            <Main />
          </Route>
          <Route exact path="/restaurants/:id">
            <DetailRestaurant />
          </Route>
          <Route exact path="/restaurants/:id/reviews/new">
            <Form />
          </Route>
          <Route exact path="/addrestaurant">
            <AddRest />
          </Route>
          <Route exact path="/restaurants/:id/edit">
            <EditRest />
          </Route>
          <Route exact path="/restaurant/favourites">
            <Favourites />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
