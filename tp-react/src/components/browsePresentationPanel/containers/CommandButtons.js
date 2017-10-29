import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionPresentation from '../components/ActionPresentation';

class CommandButtons extends Component {
	constructor(props) {
		super(props);
		this.handleClickAdd=this.handleClickAdd.bind(this);
		this.handleClickRemove=this.handleClickRemove.bind(this);
		this.handleClickSave=this.handleClickSave.bind(this);
	}

	handleClickAdd(ev) {

	}

	handleClickRemove(ev) {

	}

	handleClickSave(ev) {

	}

	render() {
        
        
        return (
            <div>
            <ActionPresentation 
            	handleClickAdd={this.handleClickAdd}
            	handleClickRemove={this.handleClickRemove}
            	handleClickSave={this.handleClickSave}
            />
            </div>

        );
    }

}

const mapStateToProps =(state,ownProps)=> {
    return {
        presentationCourante:state.updateModelReducer.presentation
    }
};

export default connect(mapStateToProps) (CommandButtons);