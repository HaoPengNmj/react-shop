import React, { Component, lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import store from './store/store';
import Home from './pages/home';
//import Bdmap from './pages/map';
//import Cart from './pages/cart';
//import User from './pages/user';
import Tabbar from './components/tabbar';
import Good from './pages/good';
import Loading from './components/loding';

const Bdmap = lazy(() => import(/* webpackChunkName: "bdmap" */'./pages/map'));
const User = lazy(() => import(/* webpackChunkName: "user" */'./pages/user'));
const Cart = lazy(() => import(/* webpackChunkName: "cart" */'./pages/cart'));
const loading = <Loading/>;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">

            <Suspense fallback={loading}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/map" render={() => (<Bdmap />)} />
                <Route path="/shopcart" render={() => (<Cart />)} />
                <Route path="/user" render={() => (<User />)} />
                <Route path="/shopbuy/:id" component={Good} />
                <Redirect to="/" />
              </Switch>
              <Tabbar></Tabbar>
            </Suspense>

          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
