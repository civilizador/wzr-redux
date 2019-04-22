import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getLocAction} from '../actions';
import {getLocbyZip} from '../actions';
import TopBar from './Top'
class App extends Component {
    
    
    componentDidMount(){
            return this.props.getLocAction()
    }
    getByZipCode=(zipcode)=>{
        console.log('Printing zip code arrow function ',zipcode)
    }

    render() {
           console.log(this.props.state.weather)
      return (

        <div className="App">
          <div id="mainframeDiv">
            <TopBar w_data=  {this.props.state.weather}  getByZipCode={this.getByZipCode} />
          </div>
        </div>

      );
    }

}

const mapStateToProps = (state) => ({state})
const mapDispatchToProps = (dispatch)=>{ 
  return {
     getLocAction: () => {
        dispatch(getLocAction())
      },
     getLocbyZip: ()=> {
       dispatch(getLocbyZip() )
     }
  } 
}

export default connect(mapStateToProps,mapDispatchToProps)(App,TopBar);
