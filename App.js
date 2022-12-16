import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  pageSize = 6;
  state = {
    progress:0
  }

  setProgress = (progress) => {
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress} 
      />
          <Navbar />
          <Routes>
            <Route exact path="/General" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" />}></Route>
            <Route exact path="/Business" element={<News setProgress={this.setProgress} key="Business" pageSize={this.pageSize} country="in" category="Business" />}></Route>
            <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment" />}></Route>
            <Route exact path="/Science" element={<News setProgress={this.setProgress} key="Science" pageSize={this.pageSize} country="in" category="Science" />}></Route>
            <Route exact path="/Technology" element={<News setProgress={this.setProgress} key="Technology" pageSize={this.pageSize} country="in" category="Technology" />}></Route>
            <Route exact path="/Sports" element={<News setProgress={this.setProgress} key="Sports" pageSize={this.pageSize} country="in" category="Sports" />}></Route>
            <Route exact path="/Health" element={<News setProgress={this.setProgress} key="Health" pageSize={this.pageSize} country="in" category="Health" />}></Route>
          </Routes>
        </BrowserRouter>
        
      </div>
    )
  }
}
