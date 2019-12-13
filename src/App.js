import React from 'react';
import './App.css';
import Navbar from './navbar';

var $ = require("jquery");



class App extends React.Component {

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
        $(".fade-bg").css("background-color", "grey")
    }

    if (pctScrolled >= 20) {
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
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Navbar></Navbar>
        </header>
      </div>
    );
  }
}

export default App;
