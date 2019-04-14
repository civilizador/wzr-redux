import React from 'react';


class TopBar extends React.Component {
    onSubmit=(e)=>{
        console.log(e.target.value)
    }
    render(){
         let d = new Date(); const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                return(<div>
                            <h2> {d.getDate()} {months[d.getMonth()]} </h2>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-secondary onethird first">
                                        <div id='F'  className="col-md-5 btn btn-warning" data-toggle="button"> F </div>
                                        <div id='C'  className=" col-md-5 btn btn-warning"> C </div>
                                        </button>
                                    <button type="button" className="btn btn-secondary onethird"><h1>   {this.props.w_data.temperature} </h1> </button>
                                    <button type="button" className="btn btn-secondary onethird">
                                        <form onSubmit={this.onFormSubmit} >
                                            <div className="input-group mb-3">
                                                <input type="numbers"  maxLength="5"   className="form-control" placeholder="zipcode" />
                                                <div className="input-group-append">
                                                  <input className="btn btn-outline-warning" type="submit" id="button-addon2"/>
                                                </div>
                                            </div>
                                        </form>
                                    </button>
                                </div>
                             <div>
                                <div className="col-md-12 col-sm-12">
                                    <img  />
                                    <h2> It is in</h2>
                                    <h2>  {this.props.w_data.city}   ,  {  this.props.w_data.state }   </h2>
                                </div>
                                 </div>
                        </div>

                    )
            }
    }


export default TopBar;
