import React from 'react';
import './App.css';
import Vivus from 'vivus';
import FloydLogo from './img/floyd_animated.svg';



class LogoLoad extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
       
      };
  
      // in your constructor, add this binding
   
  }
   
    componentDidMount() {
        new Vivus('floyd-logo-vivus', { duration: 2000, file: FloydLogo});
    }
  
   
    render() {
      return (
        <div className="logo-load-container">
          <div id="floyd-logo-vivus"></div>
        </div>
      );
    }
  }
  

  

export default LogoLoad;