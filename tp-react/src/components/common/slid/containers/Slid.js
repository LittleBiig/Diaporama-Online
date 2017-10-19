import React, { Component } from 'react';
import Content from '../../content/containers/Content';
import EditMetaSlid from '../components/EditMetaSlid';
import './slid.css';


class Slid extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:this.props.title,
            txt:this.props.txt
        }
        this.handleChangeTitle=this.handleChangeTitle.bind(this);
        this.handleChangeTxt=this.handleChangeTxt.bind(this);

    }

    handleChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    handleChangeTxt(e) {
        this.setState({
            txt: e.target.value
        });
    }

  render() {
      let render_visual;
      switch(this.props.displayMode){
        case "SHORT":
            render_visual=(
                <div>
                <h2 ><strong>{this.props.id} - {this.state.title}</strong> - {this.state.txt}</h2>

                <Content
                    src={this.props.contentMap[this.props.content].src}
                    title={this.props.contentMap[this.props.content].title}
                    id={this.props.contentMap[this.props.content].id}
                    type={this.props.contentMap[this.props.content].type}
                    onlyContent={this.props.onlyContent}
                />
                </div>
                );
        break;
        case "FULL_MNG":
                render_visual=(
                <div>
                <EditMetaSlid
                    title={this.state.title}
                    txt={this.state.txt}
                    handleChangeTitle={this.handleChangeTitle}
                    handleChangeTxt={this.handleChangeTxt}
                />

                <Content
                    src={this.props.contentMap[this.props.content].src}
                    title={this.props.contentMap[this.props.content].title}
                    id={this.props.contentMap[this.props.content].id}
                    type={this.props.contentMap[this.props.content].type}
                    onlyContent={this.props.onlyContent}
                />
                </div>
                );
        break;

        }


    return (
            <div className="slid">
                {render_visual}
            </div>
    );
  }
}

export default Slid;
