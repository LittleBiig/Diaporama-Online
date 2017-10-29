import React, { Component } from 'react';
import Visual from '../components/Visual';
import Properties from '../components/Properties';

class Content extends Component {
    constructor(props) {
        super(props);        
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
                    src={this.props.src}
                    type={this.props.type}  
                />
                );
        break;
              
        }
      
      
    return (
            <div>
                {render_visual}
            </div>            
    );
  }
}

export default Content;