import React from 'react';
import './App.css';
import Navbar from './navbar';

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

    if (pctScrolled === 0) {
        $(".fade-bg").css("background-color", "red")
    }

    if (pctScrolled >= '20') {
        $(".fade-bg").css("background-color", "red")
    }

    if (pctScrolled >= 40) {
        $(".fade-bg").css("background-color", "blue")
    }

    if (pctScrolled >= 60) {
        $(".fade-bg").css("background-color", "green")
    }

    if (pctScrolled >= 80) {
        $(".fade-bg").css("background-color", "yellow")
    }
    //$(".fade-bg").css("opacity", opacity);
    //$(".fade-bg").css("background-color", random_bg_color())
  }

  componentDidMount() {
    window.addEventListener('scroll', this.amountscrolled, true);
  }

 
  render() {
    return (
      <div className="App">
         <Navbar></Navbar>
         <div className="content">
            <div className="section section1">
                <h1 className="radical-text text1">WE CREATE RADICAL NEW TECHNOLOGIES TO SOLVE SOME OF THE WORLD’S
                    HARDEST PROBLEMS</h1>
            </div>
            <div className="section section2">
                <h1 className="radical-text text2">WE CREATE RADICAL NEW TECHNOLOGIES TO SOLVE SOME OF THE WORLD’S
                    HARDEST PROBLEMS</h1>
            </div>
            <div className="section section3">
                <h1 className="radical-text">WE CREATE RADICAL NEW TECHNOLOGIES TO SOLVE SOME OF THE WORLD’S
                    HARDEST PROBLEMS</h1>
            </div>
            <div className="fade-bg">

            </div>
        </div>
      </div>
    );
  }
}

export default App;
