import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import ParticleConfigFile from './particlesjs-config.json';

const ParticleConfig = ParticleConfigFile;


class ParticlesDiv extends React.Component {
    render() {
        return (
           
              <Particles 
                params={ParticleConfig} id="particles-id"
              />
           
    );
}
}

export default ParticlesDiv;