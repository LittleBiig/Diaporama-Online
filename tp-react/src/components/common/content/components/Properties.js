import React, { Component } from 'react';
import './properties.css';

class Properties extends Component {
    constructor(props) {
        super(props);
    }

  render() {
      let render_visual;
      switch(this.props.type){

        case "img_url":
            render_visual=(
              <div className="contentAndDescription">
                <img
                    className='imgCard card'
                    src={this.props.src}
                />
                <p >{this.props.id} - {this.props.title}</p>
                </div>



                );
        break;
        case "web":
            render_visual=(
              <div className="contentAndDescription">

                <iframe
                    className='web card'
                    src={this.props.src}
                ></iframe>
                <p >{this.props.id} - {this.props.title}</p>

                </div>



                );
        break;
        case "video":
              render_visual=(
              <div className="contentAndDescription">

                <object  width="100%" height="100%"
                className='video card'
                        data={this.props.src}>
                </object>
                <p >{this.props.id} - {this.props.title}</p>
                
                </div>

                );
        break;

        }


    return (
            <div className="prop">
                {render_visual}
            </div>
    );
  }
}

export default Properties;
