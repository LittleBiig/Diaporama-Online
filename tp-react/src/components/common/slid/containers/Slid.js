import React, { Component } from 'react';
import Content from '../../content/containers/Content';
import EditMetaSlid from '../components/EditMetaSlid';
import './slid.css';

import { connect } from 'react-redux';
import {setSelectedSlid} from '../../../../actions';



class Slid extends Component {
    constructor(props) {
        super(props);
        let changeInput=false;
        this.state={
            title:this.props.title,
            txt:this.props.txt,
            content:this.props.content,
            changeInput:changeInput
        }
        this.handleChangeTitle=this.handleChangeTitle.bind(this);
        this.handleChangeTxt=this.handleChangeTxt.bind(this);
        this.updateSelectedSlid=this.updateSelectedSlid.bind(this);
        this.drop=this.drop.bind(this);
        this.onDragOver=this.onDragOver.bind(this);
    }

    drop(ev) {
        ev.preventDefault();
        /*var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));*/
        this.setState({
            content: this.props.content_drag
        });
        this.state.changeInput=true;

        this.props.updateSlid(this.props.id,this.state.title,this.state.txt,this.props.content_drag);


    }

    onDragOver(ev) {
        ev.preventDefault();
    }

    handleChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
        this.state.changeInput=true;
        
        this.props.updateSlid(this.props.id,e.target.value,this.state.txt,this.state.content);
        
    }

    handleChangeTxt(e) {
        this.setState({
            txt: e.target.value
        });
        this.state.changeInput=true;

        this.props.updateSlid(this.props.id,this.state.title,e.target.value,this.state.content);

    }

    updateSelectedSlid() {
        const tmpSlid={id:this.props.id,
                        title:this.props.title,
                        txt:this.props.txt,
                        content:this.props.content};
        this.props.dispatch(setSelectedSlid(tmpSlid));

    }

  render() {
      let render_visual;
      if (!this.state.changeInput) {
                    this.state.title=this.props.title;
                    this.state.txt=this.props.txt;
                    this.state.content=this.props.content;
                    
                }
                this.state.changeInput=false;
      switch(this.props.displayMode){

        case "SHORT":
            render_visual=(
                <div>
                <h2 ><strong>{this.props.id} - {this.props.title}</strong> - {this.props.txt}</h2>

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
                    src={this.props.contentMap[this.state.content].src}
                    title={this.props.contentMap[this.state.content].title}
                    id={this.props.contentMap[this.state.content].id}
                    type={this.props.contentMap[this.state.content].type}
                    onlyContent={this.props.onlyContent}
                />
                </div>
                );
        break;

        }


    return (
            <div className="slid" onClick={()=>this.updateSelectedSlid()} onDrop={this.drop} onDragOver={this.onDragOver}>
                {render_visual}
            </div>
    );
  }
}

const mapStateToProps =(state,ownProps)=> {
    return {
        contentMap:state.updateModelReducer.content_map,
        content_drag:state.selectedReducer.content_id
    }
};


export default connect(mapStateToProps) (Slid);
