import React from 'react';
import { connect } from 'react-redux';


class EditMetaPres extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			title:this.props.title,
			description:this.props.description
		}
		this.handleChangeTitle=this.handleChangeTitle.bind(this);
        this.handleChangeDescription=this.handleChangeDescription.bind(this);
	}

	handleChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    handleChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }



	render(){
		return (
			<div className="form-group">
			<label htmlFor="currentSlideTitle">Title</label>
 			<input
				type="text"
				className="form-control"

				onChange={this.handleChangeTitle}
				value={this.state.title}
 			/>
			     <br/>
			<label htmlFor="currentSlideText">Text</label>
 			<textarea
				rows="3"
				type="text"
				className="form-control"

				onChange={this.handleChangeDescription}
				value={this.state.description}>
			</textarea>
		</div>
		);
	}
}

const mapStateToProps =(state,ownProps)=> {
    return {
        contentMap:state.updateModelReducer.content_map
    }
};


export default connect(mapStateToProps) (EditMetaPres);