import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <h1>Dave Riddle</h1>
    );
  }
}

export default class Body extends Component {
  render() {
    return (
      <table>
        <tr>
          <td>Software Developer</td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>Ruby</li>
              <li>JavaScript</li>
              <li><a href="https://www.codeeval.com/profile/joyvuu-dave/" target="_blank">CodeEval</a></li>
            </ul>
          </td>
        </tr>
      </table>
    );
  }
}

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}
