import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <input type='text' />
        <button type='submit'>Submit</button>
        <br />
        <img src='https://th.bing.com/th/id/OIP.MF5V_dkybUTcfzwHFh0VSwHaEO?rs=1&pid=ImgDetMain' alt='description' />
      </form>
    );
  }
}

class Exercise extends Component {
  constructor(props) {
    super(props);
    this.style_header = {
      color: 'white',
      backgroundColor: 'DodgerBlue',
      padding: '10px',
      fontFamily: 'Arial'
    };
    this.style_helloWorld = {
      color: 'red',
      backgroundColor: 'lightblue'
    };
  }

  render() {
    return (
      <div>
        <h1 style={this.style_helloWorld}>Hello world</h1>
        <p className='para'>this is a paragraph</p>
        <a href='https://reactjs.org/'>this is a link</a>
        <Form />
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
        <h1 style={this.style_header}>hello world!!!!!</h1>
      </div>
    );
  }
}

export default Exercise;