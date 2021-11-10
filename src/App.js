import React, {Component} from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import Chatbox from './components/Chatbox/Chatbox';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import './App.css';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 900
      }
    }
  }
}
class App extends Component {

  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }


  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
  }

  onRouteChange = (route) => {
    if (route === 'signout'){
      this.setState({isSignedIn: false})
    }
    else if (route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route:route});
  }

  render() {
    const {isSignedIn,  route} = this.state;
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { 
        
          route === 'home' // if
          ? // do this
          <>
          <Logo />
          {/* <Rank /> */}
          <Chatbox
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit} />
          {/* <FaceRecognition
            box={box}
            imageUrl={imageUrl} /> */}
          </>
          // else
          : (
            route === 'signin' // if
            ? // do this
            <Signin onRouteChange={this.onRouteChange}/>
            : // else
            <Register onRouteChange={this.onRouteChange}/>
          )

        }
      </div>
    );
  }
}

export default App;
