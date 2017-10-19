import React, { Component } from 'react';
import './Visual.css';

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
              <div>

                <iframe
                    className='imgCard'
                    src={this.props.src}
                ></iframe>
                </div>



                );
        break;
        case "video":
              render_visual=(
              <object  width="100%" height="100%"
                        data={this.props.src}>
                </object>
                );
        break;

        }


    return (
            <div className="visu">
                {render_visual}
            </div>
    );
  }
}

export default Visual;
