import React from 'react';
import Content from '../common/content/containers/Content';
import './main.css';
import '../../lib/bootstrap-4.0.0-beta-dist/css/bootstrap.min.css';
import * as contentMapTmp from '../../source/contentMap.json';
export default class Main extends React.Component{
constructor(props) {
super(props);
let onlyContent1=true;
this.state = {
contentMap:contentMapTmp,
onlyContent:onlyContent1
}
}
render() {
return (
	<div className='container-fluid height-100'>
		<div className="row height-100">
			<div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
				<h1>Hello</h1>
			</div>
		<div className='col-md-6 col-lg-6 height-100' >
			<Content  
				src={this.state.contentMap[1].src} 
				id={this.state.contentMap[1].id} 
				type={this.state.contentMap[1].type} 
				onlyContent={this.state.onlyContent}
			/>
		</div>
		<div className='col-md-3 col-lg-3 height-100'>
			<h1>Hello</h1>
		</div>
	</div>
</div>
);
}
}