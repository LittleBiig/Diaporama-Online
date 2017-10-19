import React, { Component } from 'react';
import Slid from '../../common/slid/containers/Slid'


import { connect } from 'react-redux';


class EditSlidPanel extends React.Component
{
	constructor(props) {
        super(props);
        this.state={
            title:this.props.title,
            txt:this.props.txt
        }
    }


const mapStateToProps =(state,ownProps)=> {
	return {
		selected_slid:state.selectedReducer.slid,
	}};


export default connect(mapStateToProps)(EditSlidPanel);