import React, { Component } from 'react';
import './visual.css';

class Visual extends Component {
    constructor(props) {
        super(props);
    }

  render() {
      let render_visual;
      switch(this.props.type){
        case "img_url":
            render_visual=(
                <img className="visu"
                    src={this.props.src}
                />
                );
        break;
        case "web":
            render_visual=(
              <div className="visu">
                <iframe
                    src={this.props.src}
                ></iframe>
                </div>



                );
        break;
        case "video":
              render_visual=(
              <object  className="visu"
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

export default Visual;
