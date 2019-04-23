import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getLocAction} from '../actions';
import {getLocbyZip} from '../actions';
import TopBar from './Top';
import Body from './Body'
class App extends Component {
   
    componentDidMount(){
        // Fetching data first time.
       this.props.getLocAction()
       // Setting interval to update data every 8 seconds
       this.stateinterval = setInterval( ()=>{this.props.getLocAction()}, 8000 )
    }
    
    getByZipCode=(zipcode)=>{
        // when user search weather by zip code, interval removed.
        clearInterval(this.stateinterval)
        this.props.getLocbyZip(zipcode)
        console.log('Printing zip code arrow function ',zipcode)
    }
    
    shouldComponentUpdate(prevState,nextState){
    //  Checking if updated weather any different if not do not update component.
      if(prevState===nextState){ 
          console.log(nextState);
          return false}
      else return true
    }

    render() {
       return (
        <div className="App">
          <div id="mainframeDiv">
            <TopBar   w_data= {this.props.state.weather}  />
            <Body w_data= {this.props.state.weather} />
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
    //   passing zipcode value to zipcode action
     getLocbyZip: (zipcode)=> {
       dispatch(getLocbyZip(zipcode) )
     }
  } 
}

export default connect(mapStateToProps,mapDispatchToProps)(App,TopBar);
