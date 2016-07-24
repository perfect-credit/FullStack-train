import React, { Component } from 'react';
import banner from './banner.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <p className="App-intro">
      Welcome to Feline Finder
      </p>

      <p className="App-description">Post a picture of your lost pet along with your email and location so our community can help you locate them!
      </p>

      <div className="App-form">

      <form method="post" className="form-horizontal" id="newCatForm">

        <ul className="formStyle1">

          <li><a href="#" className="searchLost" id="galBtn" onClick={this.handleDisplayPets}>Search Lost Pets</a>
          </li>

          <li>
          <label className="firstClass">Pet Name
          <span className="required">*
          </span>
          </label>
          <input id="firstName" type="text" name="field1" className="fieldDivided" placeholder="First"/>&nbsp;

          <input id="lastName" type="text" name="field2" className="fieldDivided" placeholder="Last" />
          </li>

          <li>
          <label>Owners Email
          <span className="required">*
          </span>
          </label>
          <input id="email" type="email" name="field3" className="fieldLong" placeholder="example@example.com"/>
          </li>

          <li>
          <label>Last Seen
          <span className="required">*
          </span>
          </label>
          <input type="text" name="field5" id="field5" className="fieldLong fieldTextArea" placeholder="Location">
          </input>
          </li>

          <li>
          <label>Picture URL
          <span className="required">*
          </span>
          </label>
          <input id="picture" type="text" name="field4" className="fieldPhoto" placeholder="http://www.dogz.com/my-cute-pup.jpg"/>
          </li>

          <li>
          <input type="submit" value="Add Your Pet" onClick={this.handlePostLostPet}></input>
          </li>
          </ul>
          </form>

      </div>
      <div className="App-header">
      <img src={banner} className="banner" alt="banner" />
      </div>
      </div>
    );
  }
}

export default App;
