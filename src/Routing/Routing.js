/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import logo from '../Images/newVodafone.png';
/* Importing neccesary components for Routing */
import Dashboard from '../Components/Dashboard'
import Album from '../Components/Albums/ListAlbum';
import NotFound from '../Components/Common/404'
import ListPhoto from "../Components/Photos/ListPhoto";
import Photos from "../Components/Photos/ListPhoto";
import { Login } from '../Components/Login/Login';
import Register from '../Components/Register/Register';


export default class Routing extends React.Component {
  render() {
    return (
      <div>
          <ul className="topnav">
            <li><Link to="/">
                  <img className="brand" src={logo} alt="photoGallery logo" />
                </Link>
            </li>
            <li><Link to="/Album">Albums</Link></li>
            <li><Link to="/Photos">Photos</Link></li>
            <li style={{float:"right"}} ><Link to="/Login"> Logout </Link> </li>
          </ul>
    
        <Switch>
          <Route exact path="/"  component={Dashboard} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Album"  component={Album} />
          <Route exact path="/Photos"  component={Photos} />
          <Route path="/photos/:id" component={ListPhoto} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}
