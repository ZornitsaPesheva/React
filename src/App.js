import React, { Component } from 'react';
import OrgChart from './chart';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{height: '100%'}}>

        <OrgChart nodes={
          [{id: 1, name: "Name1", title: "Tytle1"}, 
          {id: 2, pid: 1, name: "Name2", title: "Tytle2"},
          {id: 3, pid: 1, name: "Name3", title: "Tytle3"},
          {id: 4, pid: 2, name: "Name3", title: "Tytle3"},
          {id: 5, pid: 2, name: "Name3", title: "Tytle3"},
          {id: 6, pid: 3, name: "Name3", title: "Tytle3"},
          {id: 7, pid: 3, name: "Name3", title: "Tytle3"},
          {id: 8, pid: 4, name: "Name3", title: "Tytle3"},
          {id: 9, pid: 4, name: "Name3", title: "Tytle3"},
          {id: 10, pid: 5, name: "Name3", title: "Tytle3"},
          {id: 11, pid: 5, name: "Name3", title: "Tytle3"},
          {id: 12, pid: 6, name: "Name3", title: "Tytle3"},
          {id: 13, pid: 6, name: "Name3", title: "Tytle3"},
          {id: 14, pid: 7, name: "Name3", title: "Tytle3"},
          {id: 15, pid: 7, name: "Name3", title: "Tytle3"}]
        }/>
      </div>
    );
  }
}
