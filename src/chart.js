import React, { Component } from 'react';

import OrgChart from '@balkangraph/orgchart.js/orgchart';

export default class extends Component {

    constructor(props) {
        super(props);

        this.state = { visible: false };
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        let that = this;

        this.chart = new OrgChart(this.refs.tree , {
            nodes: this.props.nodes,

            nodeBinding: {
                field_0: "name",
                field_1: "title"
            }
        });
        

        this.chart.on('click', function (sender, node) {
            alert(that.state.visible);
         });  
    
        this.chart.load(this.props.nodes);

    }

    render() {
        return (
            <div id="tree" ref="tree"></div>
        );
    }
}