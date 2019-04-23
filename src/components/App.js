import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getLocAction} from '../actions';
import {getLocbyZip} from '../actions';
import TopBar from './Top'
class App extends Component {
   
    componentDidMount(){
       this.props.getLocAction()
       this.stateinterval = setInterval( ()=>{this.props.getLocAction()},5000 )
    }
    
    getByZipCode=(zipcode)=>{
        clearInterval(this.stateinterval)
        this.props.getLocbyZip(zipcode)
        console.log('Printing zip code arrow function ',zipcode)
    }
    
    shouldComponentUpdate(prevState,nextState){
      if(prevState===nextState){ 
          console.log(nextState);
          return false}
      else return true
    }
    
    
    render() {
       return (

        <div className="App">
          <div id="mainframeDiv">
            <TopBar   w_data= {this.props.state.weather}  getByZipCode={this.getByZipCode} />
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
     getLocbyZip: (zipcode)=> {
       dispatch(getLocbyZip(zipcode) )
     }
  } 
}

export default connect(mapStateToProps,mapDispatchToProps)(App,TopBar);
