import React, { Component } from 'react';

class Properties extends Component {
    constructor(props) {
        super(props);        
    }
  
  render() {
      let render_visual;
      switch(this.props.type){
        case "img":
            render_visual=(
              <div>
                <h3>{this.props.id}</h3>
                
                <img 
                    className='imgCard' 
                    src={this.props.src}  
                />
                </div>

                

                );
        break;
        case "video":
              render_visual=(
              <div>
                <h3>{this.props.id}</h3>
                <object  width="100%" height="100%"
                        data={this.props.src}>
                </object>
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