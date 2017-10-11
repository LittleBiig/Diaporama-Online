import React, { Component } from 'react';
import Slid from '../../slid/containers/Slid';


class SlidList extends Component {
    constructor(props) {
        super(props);        
    }


getAllPresRender(){
    let array_render=[];
     
    for(var i=0;i<Object.keys(this.props.slidArray).length;i++){
        array_render.push(
            <Slid
                key={i}
                id={this.props.slidArray[i].id}
                title={this.props.slidArray[i].title}
                txt={this.props.slidArray[i].txt}
                content={this.props.slidArray[i].content_id}
                contentMap={this.props.contentMap}
                displayMode="SHORT"
                onlyContent={this.props.onlyContent}
            />
            );
    }
    return array_render;
}
  
    render() {
      const display_list= this.getAllPresRender();
    return (
            <div>
               {display_list}
            </div>
    );
  }
}

export default SlidList;