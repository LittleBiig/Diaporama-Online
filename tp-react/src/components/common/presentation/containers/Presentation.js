import React, { Component } from 'react';
import EditMetaPres from '../components/EditMetaPres';
import SlidList from '../components/SlidList';
import CommandButtons from '../../../browsePresentationPanel/containers/CommandButtons';
import { connect } from 'react-redux';


class Presentation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        
        return (
            <div>
            <EditMetaPres
                title={this.props.presentationCourante.title}
                description={this.props.presentationCourante.description}
            />

            <SlidList
                slidArray={this.props.presentationCourante.slidArray}
                contentMap={this.props.contentMap}
                onlyContent={this.props.onlyContent}
            />
            </div>

        );

    
    
  }
}

const mapStateToProps =(state,ownProps)=> {
    return {
        
        presentationCourante:state.updateModelReducer.presentation,
        contentMap:state.updateModelReducer.content_map
    }
};


export default connect(mapStateToProps) (Presentation);
