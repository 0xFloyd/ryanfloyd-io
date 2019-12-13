import 'particles.js/particles';
import React from 'react';
import './App.css';
import particles from 'exports?particlesJS=window.particlesJS,window.pJSDom!particles.js';
const particlesJS = window.particlesJS;


particles.particlesJS.load('particles-js', '../public/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });


class Particles extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
         
        };
    }

    componentDidMount(){
        //particles.js github page says to load package like so:
        particlesJS.load('particles-js', 'assets/particles.json', function() {
            console.log('callback - particles.js config loaded');
        });
    }
        
    render() {
        return (
            <div>
                <div id="particles-js"></div>
            </div>
    );
}
}

export default Particles;