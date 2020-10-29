import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';

import data from './Components/data/resumeData.json';

import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {      
      resumeData: {}
    };
    ReactGA.initialize('216007419');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    this.setState({resumeData: data})    
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
