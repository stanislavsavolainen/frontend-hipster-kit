import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

/*
Configure all your app's routes here.

The first route will be aliased to '/' (index route)

Each route contains the following keys:
  - path:
    * URL path of route.
  - name:
    * Name of route as displayed in header.
    * Used as i18n id, remember to add translations to translations/*.js
  - component:
    * Which component to render when route is active.
    * Remember to import it below.
  - icon:
    * Which icon to use in NavigationDrawer for route.
    * Takes icon font string as found on: https://material.io/icons
  - requiresLogin:
    * Does the route require user to be authenticated?
    * Redirects to login screen for unauthenticated users.

Routes may optionally contain the following keys:
  - separator:
    * Whether to show a separator in NavigationDrawer below route
  - hideWhenScope:
    * Array of scopes, if user scope found in array hide route from NavigationDrawer.
    * null scope in array means unauthenticated.
*/

// Components
import Home from '../modules/Home';
import Users from '../modules/Users';
import Preferences from '../modules/Preferences';
import Login from '../modules/Login';
import Logout from '../modules/Logout';

import MyProfiles_A from '../modules/MyProfiles1'; // ******* oma ********

import Oma_luokka1 from '../my_modules1/MyTest1';
import Oma_luokka2 from '../my_modules1/MyTest2';
import Oma_luokka3 from '../my_modules1/MyTest3';
import Oma_luokka4 from '../my_modules1/MyTest4';
import Oma_luokka5 from '../my_modules1/MyTest5';
import Oma_luokka6 from '../my_modules1/MyTest6';
import Oma_luokka7 from '../my_modules1/MyTest7';
import Oma_luokka8 from '../my_modules1/MyTest8';

/*

//Testi ei toteutusta

const luokka_taulukko = [ { arvo: '/my_modules1/MyTest1' , tieto: '' }];

import Oma_luokkaA from ['','',''] ;

import Oma_luokkaA from luokka_taulukko[0].arvo;    
*/



// https://material.io/icons/


// Routes
const routeConfigs = [{
  path: '/home',
  name: 'Home',
  component: Home,
  icon: 'home',
  requiresLogin: false,
}, {
  path: '/users',
  name: 'Users',
  component: Users,
  icon: 'supervisor_account',
  separator: true,
  requiresLogin: true,
}, {
  path: '/preferences',
  name: 'Preferences',
  component: Preferences,
  icon: 'settings',
  requiresLogin: true,
}, {
  path: '/login',
  name: 'Login',
  component: Login,
  icon: 'account_circle',
  requiresLogin: false,
  hideWhenScope: ['user', 'admin'],
}, {
  path: '/logout',
  name: 'Logout',
  component: Logout,
  icon: 'exit_to_app',
  requiresLogin: false,
  hideWhenScope: [null],
},
 //oma route "MyProfiles1.jsx"
 {
  path: '/MyProfiles22', //linkki minne sivulle käyttäjä siiirtyy
  name: 'myProfiles', //nagivointi palkissa linkin nimi
  component: MyProfiles_A, //muuttuja esitetään importissa
  icon: 'account_circle', // icon - kuva voi valita luettelosta
  requiresLogin: false,
}, 
// oma luokan esitys, mutta oma hakemisto ja oma React-luokka
 {
  path: '/TestiLuokka1', //linkki minne sivulle käyttäjä siiirtyy
  name: 'Linkki TestiLuokka1', //nagivointi palkissa linkin nimi
  component: Oma_luokka1, //muuttuja esitetään importissa
  icon: 'settings', // icon - kuva voi valita luettelosta
  requiresLogin: false,
},
//oma luokka + Material-UI
{
  path: '/TestiLuokka2', //linkki minne sivulle käyttäjä siiirtyy
  name: 'Linkki TestiLuokka2', //nagivointi palkissa linkin nimi
  component: Oma_luokka2, //muuttuja esitetään importissa
  icon: 'shop', // icon - kuva voi valita luettelosta
  requiresLogin: false,
},
//Material-UI testi 2
{
  path: '/TestiLuokka3', //linkki minne sivulle käyttäjä siiirtyy
  name: 'Linkki TestiLuokka3', //nagivointi palkissa linkin nimi
  component: Oma_luokka3, //muuttuja esitetään importissa
  icon: 'account_balance', // icon - kuva voi valita luettelosta
  requiresLogin: false,
},
//Material-Ui testi 3
{
  path: '/TestiLuokka4', //linkki minne sivulle käyttäjä siiirtyy
  name: 'Linkki TestiLuokka4', //nagivointi palkissa linkin nimi
  component: Oma_luokka4, //muuttuja esitetään importissa
  icon: 'stars', // icon - kuva voi valita luettelosta
  requiresLogin: false,
},
//
{
  path: '/TestiLuokka5', //linkki minne sivulle käyttäjä siiirtyy
  name: 'Linkki TestiLuokka5', //nagivointi palkissa linkin nimi
  component: Oma_luokka5, //muuttuja esitetään importissa
  icon: 'backup', // icon - kuva voi valita luettelosta
  requiresLogin: false,
},
{
  path: '/TestiLuokka6', //linkki minne sivulle käyttäjä siiirtyy
  name: 'Linkki TestiLuokka6', //nagivointi palkissa linkin nimi
  component: Oma_luokka6, //muuttuja esitetään importissa
  icon: 'backup', // icon - kuva voi valita luettelosta
  requiresLogin: false,
},
{
  path: '/TestiLuokka7', //linkki minne sivulle käyttäjä siiirtyy
  name: 'Linkki TestiLuokka7', //nagivointi palkissa linkin nimi
  component: Oma_luokka7, //muuttuja esitetään importissa
  icon: 'pan_tool', // icon - kuva voi valita luettelosta
  requiresLogin: false,
},
{
  path: '/TestiLuokka8', //linkki minne sivulle käyttäjä siiirtyy
  name: 'Linkki TestiLuokka8', //nagivointi palkissa linkin nimi
  component: Oma_luokka8, //muuttuja esitetään importissa
  icon: 'pan_tool', // icon - kuva voi valita luettelosta
  requiresLogin: false,
}



];

export default routeConfigs;

/*
Code below this line configures the routes as given by routeConfigs
*/

// PropTypes "schema" for routeConfig
export const RouteConfigShape = PropTypes.shape({
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  requiresLogin: PropTypes.bool.isRequired,
  showHeader: PropTypes.bool,
});

// Takes a routeConfig and wraps it in react-router's <Route> component.
// If requiresLogin is true, redirect to /login if user has not authenticated
let AuthRedirectRoute = ({ loggedIn, routeConfig, ...rest }) => (
  <Route
    {...rest}
    exact path={routeConfig.path}
    render={props => (
    routeConfig.requiresLogin && !loggedIn ? (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    ) : (
      <div>
        { React.createElement(routeConfig.component, props) } 
      </div>
    )
  )}
  />
);

AuthRedirectRoute.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  routeConfig: RouteConfigShape.isRequired,
  location: PropTypes.string,
};

AuthRedirectRoute.defaultProps = {
  location: null,
};

// Connect AuthRedirectRoute to redux store, get loggedIn status
AuthRedirectRoute = connect(
  state => ({
    loggedIn: !!state.auth.data.token,
  }),
)(AuthRedirectRoute);

// AuthRedirectRoute wrapper which mounts routeConfig at '/' regardless of configured path
export const IndexRoute = ({ routeConfig, ...rest }) => {
  const indexRoute = {
    ...routeConfig,
    path: '/',
  };

  return (
    <AuthRedirectRoute
      {...rest}
      routeConfig={indexRoute}
    />
  );
};

IndexRoute.propTypes = {
  routeConfig: RouteConfigShape.isRequired,
};

// Map all configured routes into AuthRedirectRoute components
export const ConfiguredRoutes = ({ ...rest }) => (
  <div>
    {
      routeConfigs.map(routeConfig => (
        <AuthRedirectRoute
          {...rest}
          key={routeConfig.path}
          routeConfig={routeConfig}
        />
      ))
    }
  </div>
);
