import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from "react-tsparticles";
import particlesOptions from "./components/particlesOptions/particlesOptions";
import './App.css';


class App extends Component {
  render () {
    const particlesInit = (main) => {
      console.log(main);  
      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };  
    const particlesLoaded = (container) => {
      console.log(container);
    };
    return (            
      <div className="App">
        <Particles 
          className="particles"    
          id="tsparticles"    
          init={particlesInit}    
          loaded={particlesLoaded}          
          options={particlesOptions}       
        />
        <Navigation />
        <Logo />
        <Rank />

        <ImageLinkForm />
        {/*<Facerecognition />} */}

      </div>
    );
  }  
}

export default App;
