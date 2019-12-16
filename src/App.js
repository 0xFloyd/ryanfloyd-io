import React from 'react';
import './App.css';
import Navbar from './navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faBars, faCoffee } from '@fortawesome/free-solid-svg-icons';
//import LogoLoad from './logo-load';

library.add(fas, faBars, faCoffee)

var $ = require("jquery");


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };

    // in your constructor, add this binding
 
}
  random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
  }
 

  amountscrolled() {
    var winheight = $(window).height()  // get height of browser window 
    var docheight = $(document).height()        //  height of the entire document (whole scroll area)
    var scrollTop = $(window).scrollTop()       // detect how many pixels user scrolled 
    var trackLength = docheight - winheight
    var pctScrolled = Math.floor(scrollTop / trackLength * 100)// gets percentage scrolled (ie: 80 NaN if tracklength == 0)

    //var opacity = pctScrolled;
    console.log(pctScrolled + '% scrolled')

    if (pctScrolled < 20) {
        $(".content").css("background-color", "white")
    }

    if (pctScrolled >= 20) {
        $(".content").css("background-color", "red")
    }

    if (pctScrolled >= 40) {
        $(".content").css("background-color", "blue")
    }

    if (pctScrolled >= 60) {
        $(".content").css("background-color", "green")
    }

    if (pctScrolled >= 80) {
        $(".content").css("background-color", "yellow")
    }
    //$(".content").css("opacity", opacity);
    //$(".content").css("background-color", random_bg_color())
  }

  componentDidMount() {
    window.addEventListener('scroll', this.amountscrolled, true);
  }
 
 
  render() {
    return (
        <div className="content">
            <Navbar></Navbar>
            <div className="section section2">
                <h1 className="radical-text text2">WE CREATE RADICAL NEW TECHNOLOGIES TO SOLVE SOME OF THE WORLD’S
                    HARDEST PROBLEMS</h1>
            </div>
           
        <div className="content">
          <div className="section">
                  
              </div>
        </div>
        <div className="content">
          <div className="section">
                  
              </div>
        </div>
        <div className="content">
          <div className="section">
                  
              </div>
        </div>
        <div className="content">
          <div className="section">
                  
              </div>
        </div>
        </div>

    );
  }
}

export default App;
