import React, { Component } from 'react';
import Slid from '../../common/slid/containers/Slid'
import {updateSlid} from '../../../actions'

import { connect } from 'react-redux';


class EditSlidPanel extends React.Component
{

    constructor(props) {
        super(props);
        let onlyContent2=false;
        this.state = {
            onlyContent:onlyContent2
        }
        this.updateSlid=this.updateSlid.bind(this);
    }

    updateSlid(id,title,txt,content_id) {
        const tmpSlid={ id:id,
                    title:title,
                    txt:txt,
                    content_id:content_id};
        this.props.dispatch(updateSlid(tmpSlid));
    }

    render() {
      if(this.props.selected_slid.id ==undefined){
          return <div></div>;
      }
    
    return (
            <div>
                <Slid 
                    id={this.props.selected_slid.id}
                    title={this.props.selected_slid.title}
                    txt={this.props.selected_slid.txt}
                    content={this.props.selected_slid.content}
                    contentMap={this.props.contentMap}
                    displayMode="FULL_MNG"
                    onlyContent={this.state.onlyContent}
                    updateSlid={this.updateSlid}
                    />
            </div>
    );
  }
}
    


const mapStateToProps =(state,ownProps)=> {
    return {
        selected_slid:state.selectedReducer.slid
    }
};


export default connect(mapStateToProps)(EditSlidPanel);