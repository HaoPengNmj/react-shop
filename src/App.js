import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import store from './store/store';
import Home from './pages/home';
import Bdmap from './pages/map';
import Cart from './pages/cart';
import User from './pages/user';
import Tabbar from './components/tabbar';
import Good from './pages/good';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/map" component={Bdmap} />
              <Route path="/shopcart" component={Cart} />
              <Route path="/user" component={User} />
              <Route path="/shopbuy/:id" component={Good}/>
              <Redirect to="/" />
            </Switch>
            <Tabbar></Tabbar>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
