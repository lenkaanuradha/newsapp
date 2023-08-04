import React, { Component } from "react";
import Navbar from "./Navbar";
import News from "./News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
export class App extends Component {
  state={
    progress:0
  
    }
    setProgress =(progress)=>{
  this.setState({progress:progress})
    }
  render() {
    return (
      <>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       
      />
        <Routes>
        <Route
            exact
            path="/"
            element={<News  setProgress={this.setProgress} key="General" country="in" category="General" />}
          />
          <Route
            exact
            path="/general"
            element={<News  setProgress={this.setProgress} key="General" country="in" category="General" />}
          />
          <Route
            exact
            path="/science"
            element={<News  setProgress={this.setProgress} key="Science" country="in" category="Science" />}
          />
          <Route
            exact
            path="/sports"
            element={<News  setProgress={this.setProgress} key="Sports" country="in" category="Sports" />}
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News  setProgress={this.setProgress} key="Entertainment" country="in" category="Entertainment" />
            }
          />
          <Route
            exact
            path="/business"
            element={<News  setProgress={this.setProgress} key="business" country="in" category="business" />}
          />
          <Route
            exact
            path="/health"
            element={<News  setProgress={this.setProgress} key="Health" country="in" category="Health" />}
          />
          <Route
            exact
            path="/technology"
            element={
              <News  setProgress={this.setProgress} key="Technology" country="in" category="Technology" />
            }
          />
        </Routes>
      </>
    );
  }
}

export default App;
