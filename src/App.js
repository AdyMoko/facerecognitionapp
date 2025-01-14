import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Facerecognition from './components/Facerecognition/Facerecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register'
import Particles from "react-tsparticles";
import particlesOptions from "./components/particlesOptions/particlesOptions";
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: '7cd2134ac2a24ecab26a3a2184627422'
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      input:'',
      imageUrl:'',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol : clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol : width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  dispalyFaceBox = (box) => {
    this.setState({ box : box });
  }

  onInputChange = (event) => {
    this.setState({ input : event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl : this.state.input });
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => this.dispalyFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));      
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn:false})
    } else if (route === 'home'){
      this.setState({isSignedIn:true})
    }
    this.setState({route :route});
  }

  render () {
    const {route, box, imageUrl, isSignedIn} = this.state;    
    return (           
      <div className="App">
        <Particles 
          className="particles" 
          id="tsparticles" 
          options={particlesOptions}
        />
       
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />

        {route === 'home' 
          ?<div>
              <Logo />
              <Rank />
              <ImageLinkForm 
                onInputChange={this.onInputChange} 
                onButtonSubmit={this.onButtonSubmit}
              />
              <Facerecognition box={box} imageUrl={imageUrl}/>
            </div> 
          : ( route === 'signin'
            ? <Signin onRouteChange = {this.onRouteChange} />
            : <Register onRouteChange = {this.onRouteChange} />
          )          
            
        }
      </div>
    );
  }  
}

export default App;
