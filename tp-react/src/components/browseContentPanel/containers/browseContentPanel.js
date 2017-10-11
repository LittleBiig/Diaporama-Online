import React, { Component } from 'react';
import './browseContentPanel.css'
import Content from '../../common/content/containers/Content';


class browseContentPanel extends Component {
    constructor(props) {
        super(props);        
    }


getAllDiapoRender(){
    let array_render=[];
     
    for(var i=1;i<Object.keys(this.props.contentMap).length;i++){
        array_render.push(
            <Content
                key={i}
                src={this.props.contentMap[i].src}
                title={this.props.contentMap[i].title}
                id={this.props.contentMap[i].id}
                type={this.props.contentMap[i].type}
                onlyContent={this.props.onlyContent}
            />
            );
    }
    return array_render;
}
  
    render() {
      const display_list= this.getAllDiapoRender();
    return (
            <div>
               {display_list}
            </div>
    );
  }
}

export default browseContentPanel;