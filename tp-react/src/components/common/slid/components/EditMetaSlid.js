import React from 'react';
import './editMetaSlid.css'
import { connect } from 'react-redux';

class EditMetaSlid extends React.Component{
 constructor(props) {
 super(props);
 }
 // <label htmlFor="currentSlideTitle">Title h1 of the slide</label>
 // <label htmlFor="currentSlideText">Text</label>
 render(){
 return (
 <div className=" ">
    <input
         type="text"
         className="form-control"
         id="currentSlideTitle"
         onChange={this.props.handleChangeTitle}
         value={this.props.title}
     />
     <br/>
     <textarea
         rows="5"
         type="text"
         className="form-control"
         id="currentSlideText"
         onChange={this.props.handleChangeTxt}
         value={this.props.txt}>
     </textarea>
 </div>
 ); }}

 const mapStateToProps =(state,ownProps)=> {
    return {
        contentMap:state.updateModelReducer.content_map
    }
};


export default connect(mapStateToProps) (EditMetaSlid);