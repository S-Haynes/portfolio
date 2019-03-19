import React, {Component} from "react";
import {Spinner, CardImg} from 'reactstrap';
import Logo from '../../assets/img/logo.png'
import { ScaleLoader } from 'react-spinners'
class Contact extends Component {
  
  state = {
    content: 
    <div style={{background:"#000", width: '100vw', height: '100vh'}} className="animated slideInLeft d-flex align-items-center justify-content-center flex-column"><CardImg src={Logo} style={{maxWidth:'200px', animation:'changeColor', animationDuration: '5s', background: "#000"}}/><h6 className="mt-4 mb-4">Coffee it is.</h6><ScaleLoader size={20} color="#08fdd8"/></div> 
  }

  componentDidMount(){
    setTimeout(() => this.setState({
      content: <div>
      <h1>Contact section</h1>
      <h3>dummy text</h3>
    </div>
    }), 3000) 
  }
  render() {
    return this.state.content
  }
  }
  
export default Contact;
