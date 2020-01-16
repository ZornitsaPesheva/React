import React, { Component } from 'react';

import OrgChart from '@balkangraph/orgchart.js/orgchart';

export default class extends Component {

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        this.tree = new OrgChart(this.refs.tree , {
            nodes: this.props.nodes
        });
    }

    render() {
        return (
            <div id="tree" ref="tree"></div>
        );
    }
}