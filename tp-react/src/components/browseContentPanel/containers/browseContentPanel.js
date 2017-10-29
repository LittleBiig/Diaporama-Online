import React, { Component } from 'react';
import './browseContentPanel.css'
import Content from '../../common/content/containers/Content';
import { connect } from 'react-redux';
import AddContentPanel from '../components/AddContentPanel';


class browseContentPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            value: "img",
            title:"",
            url:""
        }
        this.handleChangeTitle=this.handleChangeTitle.bind(this);
        this.handleChangeUrl=this.handleChangeUrl.bind(this);
        this.handleChangeType=this.handleChangeType.bind(this);
        this.handleOpen=this.handleOpen.bind(this);
        this.handleClose=this.handleClose.bind(this);
    }

    handleChangeTitle(ev) {
        this.setState({
            title: ev.target.value
        });
    }

    handleChangeUrl(ev) {
        this.setState({
            url: ev.target.value
        });
    }

    handleChangeType = (event, index, value) => this.setState({value});

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };


    getAllDiapoRender(){
        let array_render=[];

        for(var i=0;i<Object.keys(this.props.contentMap).length;i++){
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
            <div className="form-group-element">
                <AddContentPanel
                    handleChangeTitle={this.handleChangeTitle}
                    handleChangeUrl={this.handleChangeUrl}
                    handleChangeType={this.handleChangeType}
                    handleOpen={this.handleOpen}
                    handleClose={this.handleClose}
                    open={this.state.open}
                    value={this.state.value}
                 />
                {display_list}
            </div>
    );
  }
}

const mapStateToProps =(state,ownProps)=> {
    return {
        contentMap:state.updateModelReducer.content_map
    }
};

export default connect(mapStateToProps) (browseContentPanel);
