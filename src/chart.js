import React, { Component } from 'react';

import OrgChart from '@balkangraph/orgchart.js/orgchart';

export default class extends Component {

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        this.tree = new OrgChart(this.refs.tree , {
            nodes: this.props.nodes,
            nodeBinding: {
                field_0: "name",
                field_1: "title"
            }
        });
    }

    render() {
        return (
            <div id="tree" ref="tree"></div>
        );
    }
}