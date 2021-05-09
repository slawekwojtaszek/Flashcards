import React, { Component } from "react";

export default class ErrorPopUp extends Component {
   handleClick = (props) => {
      this.props.toggle();
   };

   render() {
      return (
         <div className='error'>
            <h1>You have to input the message!</h1>
            <span className='close' onClick={this.handleClick}>
               &times;
            </span>
         </div>
      );
   }
}
