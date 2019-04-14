import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getLocAction} from '../actions'

class App extends Component {
   componentDidMount(){
          return this.props.getLocAction()
    }
    
    render() {
           console.log(this.props.state.weather)
      return (
        <div className="App">
        {this.props.state.weather.temperature}
         </div>
      );
    }
   
}

const mapStateToProps = (state) => ({state})


export default connect(mapStateToProps,{getLocAction})(App);
 
 
 