import React, { Component } from 'react';
import banner from './banner.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
      <img src={banner} className="banner" alt="banner" />
      </div>
      <p className="App-intro">
      Welcome to Feline Finder
      </p>
      <p className="App-description">Post a picture of your lost pet along with your email and location so our community can help you locate them!
      </p>
      <div className="App-form">

      <form method="post" className="form-horizontal" id="newCatForm">

        <ul className="formStyle1">

          <li>
          <input className="searchLost" type="submit" value="Search Lost Pets" />
          </li>

          <li>
          <label>Pet Name
          <span className="required">*
          </span>
          </label>
          <input type="text" name="field1" className="fieldDivided" placeholder="First"/>&nbsp;
          <input type="text" name="field2" className="fieldDivided" placeholder="Last" />
          </li>

          <li>
          <label>Owners Email
          <span className="required">*
          </span>
          </label>
          <input type="email" name="field3" className="fieldLong"/>
          </li>

          <li>
          <label>Picture URL
          <span className="required">*
          </span>
          </label>
          <input type="text" name="field4" className="fieldPhoto"/>
          </li>

          <li>
          <label>Last seen
          <span className="required">*
          </span>
          </label>
          <input type="text" name="field5" id="field5" className="fieldLong fieldTextArea">
          </input>
          </li>

          <li>
          <input type="submit" value="Add Your Pet" />
          </li>
          </ul>
          </form>

      </div>

      </div>
    );
  }
}

export default App;
