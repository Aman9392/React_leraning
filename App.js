import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  pageSize = 6;
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/General" element={<News key="general" pageSize={this.pageSize} country="in" category="general" />}></Route>
            <Route exact path="/Business" element={<News key="Business" pageSize={this.pageSize} country="in" category="Business" />}></Route>
            <Route exact path="/Entertainment" element={<News key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment" />}></Route>
            <Route exact path="/Science" element={<News key="Science" pageSize={this.pageSize} country="in" category="Science" />}></Route>
            <Route exact path="/Technology" element={<News key="Technology" pageSize={this.pageSize} country="in" category="Technology" />}></Route>
            <Route exact path="/Sports" element={<News key="Sports" pageSize={this.pageSize} country="in" category="Sports" />}></Route>
            <Route exact path="/Health" element={<News key="Health" pageSize={this.pageSize} country="in" category="Health" />}></Route>
          </Routes>
        </BrowserRouter>
        
      </div>
    )
  }
}
