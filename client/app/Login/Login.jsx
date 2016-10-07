import React, {PropTypes} from 'react'
import { Link } from 'react-router'
import LoginContainer from './loginContainer.jsx'

const hasId = false;

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      online: false,
    }
  }

  componentWillMount() {
    window.checkOnlineInterval = window.setInterval(()=>{this.checkOnline()}, 1000);

    if(navigator.onLine){
      this.setState({online: true});
    }
  }

  componentDidMount(){
    if(!hasId && !this.state.online){
      console.log('ONLINE0!');
      this.setState({message: 'Seems like this is your first time using Squirrel! Please connect to the internet and Login. Don\'t worry, you only have to do this once. Next time we\'ll take you straight to your stash.'})
    }
    if(!hasId && this.state.online) {
      console.log('ONLINE1!');
      this.setState({message: 'Thanks for using Squirrel! Seems like this is your first time. Please login in through facebook to view your stash.'})
    }  
    if(hasId) {  //cached userID found scenario
      this.context.router.push('/home');
    };
    //if we can find the userID cached in folder, reroute to home page  
  }

  componentWillUpdate(nextProps, nextState){
    if(nextState.online && !this.state.online){
      this.setState({message: 'Thanks for using Squirrel! Seems like this is your first time. Please login in through facebook to view your stash.'})
    }
    if(!nextState.online && this.state.online){
      this.setState({message:'Seems like this is your first time using Squirrel! Please connect to the internet and Login. Don\'t worry, you only have to do this once. Next time we\'ll take you straight to your stash.'})
    }
  }

  componentWillUnmount() {
    console.log('window.clearInterval');
    window.clearInterval(window.checkOnlineInterval);
  }

  checkOnline() {
    console.log('checkOnline Interval');
    if(navigator.onLine && !this.state.online){
      console.log('online but state says false', this);
      this.setState({online: true});
    }
    if(!navigator.onLine && this.state.online){
      console.log('offline but state says true');
      this.setState({online: false});
    }
  }

  click() {
    this.context.router.push('/home');
  }

  render(){
    if(this.state.online) {
      return (
      <div>
        <LoginContainer />
      </div>
      );} else {
      return (
        <div className='container'>
          <h1>Offline</h1>
          <p>{this.state.message}</p>
        </div>
      );
    }
  }
}

Login.contextTypes = {
  router: PropTypes.object.isRequired
}

export default Login