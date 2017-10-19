import React, { Component } from 'react';
import EditMetaPres from '../components/EditMetaPres';
import SlidList from '../components/SlidList';

class Presentation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let render_visual;
        render_visual=(
            <div>
            <EditMetaPres
                title={this.props.title}
                description={this.props.description}
            />

            <SlidList
                slidArray={this.props.slidArray}
                contentMap={this.props.contentMap}
                onlyContent={this.props.onlyContent}
            />
            </div>

        );

    return (
        <div>
            {render_visual}
        </div>
    );
  }
}

export default Presentation;
