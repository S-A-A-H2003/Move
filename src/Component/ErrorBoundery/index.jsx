import React, { Component } from 'react'

export default class ErrorBoundery extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
    
  render() {

        if(this.state.hasError){ return <div className='ErrorBoundery'>Ooops!{ console.log("x") }</div> }
        return this.props.children;
      
  }
}


