import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getLocAction} from '../actions'
import TopBar from './Top'
class App extends Component {
   componentDidMount(){
          return this.props.getLocAction()
    }


    render() {
           console.log(this.props.state.weather)
      return (

        <div className="App">
          <div id="mainframeDiv">
            <TopBar w_data=  {this.props.state.weather} />
          </div>
        </div>

      );
    }

}

const mapStateToProps = (state) => ({state})


export default connect(mapStateToProps,{getLocAction})(App,TopBar);
