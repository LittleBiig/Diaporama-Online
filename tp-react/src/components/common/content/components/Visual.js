import React, { Component } from 'react';
import './visual.css';
import { connect } from 'react-redux';


class Visual extends Component {
    constructor(props) {
        super(props);
    }

  render() {
      let render_visual;
      switch(this.props.type){
        case "img_url":
            render_visual=(
                <img
                    src={this.props.src}
                />
                );
        break;
        case "web":
            render_visual=(
              <div >
                <iframe
                    src={this.props.src}
                ></iframe>
                </div>



                );
        break;
        case "video":
              render_visual=(
              <object
              width="100%" height="100%"
                        data={this.props.src}>
                </object>
                );
        break;

        }


    return (
            <div >
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


export default connect(mapStateToProps) (Visual);
