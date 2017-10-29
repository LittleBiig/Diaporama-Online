import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionPresentation from '../components/ActionPresentation';
import {updateSlid} from '../../../actions';

var Tools = require('../../../services/Tools.js');

class CommandButtons extends Component {
	constructor(props) {
		super(props);
		this.handleClickAdd=this.handleClickAdd.bind(this);
		this.handleClickRemove=this.handleClickRemove.bind(this);
		this.handleClickSave=this.handleClickSave.bind(this);
	}

	handleClickAdd(ev) {
		let pres=Object.assign({}, this.props.presentationCourante);
		const idSlid = Object.keys(pres.slidArray).length;
		const id = Tools.generateUUID();
		pres.slidArray[idSlid]=idSlid;
		//spres.slidArray[id].concat({"content_id": "0"});
		const tmpSlid={id:id,
                        title:"Title",
                        txt:"Description",
                        content_id:"0"};
        pres.slidArray[idSlid]=tmpSlid;
		//pres.slidArray[title]="title";
		//pres.slidArray[txt]="txt";
		//pres.slidArray[content_id]="0";
		this.props.dispatch(updateSlid(pres));

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