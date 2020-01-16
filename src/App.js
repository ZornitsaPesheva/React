import React, { Component } from 'react';
import OrgChart from './chart';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{height: '100%'}}>

        <OrgChart nodes={[{id: 1, name: "name"}]}/>
      </div>
    );
  }
}
