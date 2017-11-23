import React, { Component } from 'react';
import  './App.css';

class App extends Component {

    constructor(){
      super();
      this.addContact = this.addContact.bind(this)

      this.state = {
        contact: []
      }
    }


    addContact(name,phone,details){
      let new_contact = {
          name: name, 
          phone: phone,
          details: details
        }
      this.setState({ 
        contact: this.state.contact.push(new_contact)
      })
    }


  render() {
    return (
        <div className="App">
          <div className="container">
            <div className="row">
              <div className="col fbk">
                  Our Form will be here
              </div>
              <div className="col lbk">
                List
              </div>
              <div className="col-6 dbk">
                  Details
              </div>
            </div>
           
          </div>
      </div>
    );
  }
}

export default App;
