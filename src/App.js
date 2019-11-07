import React, { Component } from 'react';
import './App.css';
import { initializeApp } from './redux/reducer -app'
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import Sittings from './components/Sittings/Sittings';
import Music from './components/Music/Music';
import News from './components/News/News';

import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter, } from 'react-router-dom'
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { WithSuspense } from './hoc/withSuspense';
//import DialogsContainer from './components/Dialogs/Dialogs.container'
const DialogsContainer = React.lazy(() => import('./components/Dialogs/Dialogs.container'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }
    return (

      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialog' render={ WithSuspense( DialogsContainer) } />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />  } />
          <Route path='/newsss' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/sittings' component={Sittings} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <LoginPage />} />

        </div>

      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp, }))(App);

const SocialApp = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default SocialApp