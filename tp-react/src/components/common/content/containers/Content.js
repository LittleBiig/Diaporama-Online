import React, { Component } from 'react';
import Visual from '../components/Visual';
import Properties from '../components/Properties';
import './content.css';
import { connect } from 'react-redux';
import {updateDraggedElt} from '../../../../actions';


class Content extends Component {
    constructor(props) {
        super(props);
        this.drag=this.drag.bind(this);
    }


    drag(ev) {
        ev.dataTransfer.setData("text", this.props.id);
    } 

  render() {
      let render_visual;
      switch(this.props.onlyContent){
        case true:
            render_visual=(
                <Visual
                    src={this.props.src}
                    type={this.props.type}
                />
                );
        break;
        case false:
              render_visual=(
              <Properties
                    id={this.props.id}
                    title={this.props.title}
                    src={this.props.src}
                    type={this.props.type}
                />
                );
        break;

        }


    return (
            <div className="content" draggable="true" onDragStart={this.drag}>
                {render_visual}
            </div>
    );
  }
}

const mapStateToProps =(state,ownProps)=> {
    return {
        contentMap:state.updateModelReducer.content_map
    }
};


export default connect(mapStateToProps) (Content);
