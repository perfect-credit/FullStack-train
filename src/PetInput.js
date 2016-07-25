import * as React from 'react';

class PetInput extends React.Component {
  static propTypes = {
    userID: React.PropTypes.number,
    sendMessage: React.PropTypes.func,
  };

  componentDidMount() {
    this.refs.txtMessage.focus();
  }

  onSubmit = (e) => {
    e.preventDefault();

    // Check if the message is empty
    const message = this.refs.txtMessage.value;
    if (message.length === 0) {
      return;
    }

    // Build a message object and send it
    const messageObj = {
      Who: this.props.userID,
      What: message,
      When: new Date().valueOf(),
    };
    this.props.sendMessage(messageObj);

    // Clear the input field and set focus
    this.refs.txtMessage.value = '';
    this.refs.txtMessage.focus();
  };

  render() {
    const { props, onSubmit } = this;
    const imgURL = '//robohash.org/' + props.userID + '?set=set2&bgset=bg2&size=70x70';
    return (
      <div className="App-form">
      <form onSubmit={ onSubmit } className="form-horizontal" id="newCatForm">
        <ul className="formStyle1">
          <li>
          <label className="firstClass">Pet Name
          <span className="required">*
          </span>
          </label>
          <input ref="txtMessage" id="firstName" type="text" name="field1" className="fieldDivided" placeholder="First"/>&nbsp;
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
          <img src={ imgURL } />
          <span>Anonymous #{ props.userID }</span>
          <input id="picture" type="text" name="field4" className="fieldPhoto" placeholder="http://www.dogz.com/my-cute-pup.jpg"/>
          </li>
          <li>
          <input id="submit" type="submit" value="Add Your Pet"></input>
          </li>
          </ul>
          </form>
      </div>
    );
  }
}

export default PetInput;
