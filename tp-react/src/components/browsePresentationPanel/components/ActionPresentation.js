import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ActionPresentation.css';

export default class ActionPresentation extends Component {
	constructor(props) {
		super(props);
	}

	render() {
        
        
        return (
        	<div>
            <button
		        className="btn btn-default"
		        onClick={this.props.handleClickAdd}>ADD SLID</button>
		    <button
		        className="btn btn-default"
		        onClick={this.props.handleClickRemove}>REMOVE LAST SLID</button>
		    <button
		        className="btn btn-default"
		        onClick={this.props.handleClickSave}>SAVE</button>

		    </div>

        );
    }

}