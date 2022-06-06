import React, {Component} from 'react';
import PageWrapper from "./components/PageWrapper.js";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { connect }from "react-redux";

//Pages
import Home from "./components/Pages/Home.js";
import About from "./components/Pages/About.js";
import Portfolio from './components/Common/Portfolio.js';
import Team from './components/Common/Team.js';
import Contact from "./components/Pages/Contact .js";
import Login from './components/Pages/Login.js';

//Admin pages
import Dashboard from "./components/Pages/Admin/Dashboard";
import Users from "./components/Pages/Admin/Users";
import Posts from "./components/Pages/Admin/Posts";
import AddPost from './components/Pages/Admin/AddPost';

//Wrappers
import AdminWrapper from './components/AdminWrapper.js';
import LoginWrapper from './components/LoginWrapper.js';


class App extends Component {

  render(){

    return(
      <Router>
            <Route
              path = "/admin/users"
              render = {props => {
                return (
                <div>
                {this.props.auth.token ?
                  <AdminWrapper>
                    <Users/>
                  </AdminWrapper>
                  :
                  <LoginWrapper>
                    <Login/>
                  </LoginWrapper>
                
                }
               </div>
                )
              }}
            />


              

            <Route
              path = "/admin/posts/:view/:id"
              exact = {true}
              render = {props => {
                return (
                  <div>
                    {this.props.auth.token ?
                      <AdminWrapper>
                        <AddPost/>
                      </AdminWrapper>
                      :
                      <LoginWrapper>
                        <Login/>
                      </LoginWrapper>
                
                }
                  </div>
                )
              }}
            />


            <Route
              path = "/admin/posts/:view/"
              exact = {true}
              render = {props => {
                return (
                  <div>
                    {this.props.auth.token ?
                      <AdminWrapper>
                        <AddPost/>
                      </AdminWrapper>
                      :
                      <LoginWrapper>
                        <Login/>
                      </LoginWrapper>
                
                }
                  </div>
                )
              }}
            />

            <Route
              path = "/admin/posts"
              exact = {true}
              render = {props => {
                return (
                <div>
                {this.props.auth.token ?
                  <AdminWrapper>
                    <Posts/>
                  </AdminWrapper>
                  :
                  <LoginWrapper>
                    <Login/>
                  </LoginWrapper>
                
                }
               </div>
                )
              }}
            />

            <Route
              exact = {true}
              path = "/admin"
              render = {props => {
                return (
                <div>
                {this.props.auth.token ?
                  <AdminWrapper>
                    <Dashboard/>
                  </AdminWrapper>
                  :
                  <LoginWrapper>
                    <Login/>
                  </LoginWrapper>
                
                }
               </div>
                )
              }}
            />

  
            <Route
              exact = {true}
              path = "/"
              render = {props => (
                <PageWrapper>
                  <Home {...props}/>
                </PageWrapper>
              )}
            />

            <Route
              path = "/about"
              render = {props => (
                <PageWrapper>
                  <About {...props}/>
                </PageWrapper>
              )}
            />

            <Route
                path = "/portfolio"
                render = {props => (
                  <PageWrapper>
                    <Portfolio {...props}/>
                  </PageWrapper>
                )}
              />

            <Route 
              path = "/team"
              render = {props => (
                <PageWrapper>
                  <Team {...props}/>
                </PageWrapper>
              )}
            />

            <Route 
              path = "/contact"
              render = {props => (
                <PageWrapper>
                  <Contact {...props}/>
                </PageWrapper>
              )}
            />
  

      </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
  auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
return {

}
} 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(App);
