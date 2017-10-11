import React from 'react';
import BrowseContentPanel from '../browseContentPanel/containers/browseContentPanel';
import Slid from '../common/slid/containers/Slid';
import Presentation from '../common/presentation/containers/Presentation';
import './main.css';
import '../../lib/bootstrap-4.0.0-beta-dist/css/bootstrap.min.css';
import * as contentMapTmp from '../../source/contentMap.json';
import * as presTmp from '../../source/pres.json'
export default class Main extends React.Component{
constructor(props) {
super(props);
let onlyContent1=false;
this.state = {
contentMap:contentMapTmp,
pres:presTmp,
onlyContent:onlyContent1
}
}
render() {
return (
	<div className='container-fluid height-100'>
		<div className="row height-100">
			<div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
				<Presentation
					title={this.state.pres.title}
					description={this.state.pres.description}
					slidArray={this.state.pres.slidArray}
					contentMap={this.state.contentMap}
					onlyContent={this.state.onlyContent}
				/>
			</div>
		<div className='col-md-6 col-lg-6 height-100' >
			<Slid
				id="1"
				title="titre_du_slide"
				txt="description"
				content="2"
				contentMap={this.state.contentMap}
				displayMode="FULL_MNG"
				onlyContent={this.state.onlyContent}
			/>
			<Slid
				id="1"
				title="titre_du_slide"
				txt="description"
				content="2"
				contentMap={this.state.contentMap}
				displayMode="SHORT"
				onlyContent={this.state.onlyContent}
			/>
			
		</div>
		<div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
			<BrowseContentPanel
				contentMap={this.state.contentMap}
				onlyContent={this.state.onlyContent}
			/>
		</div>
	</div>
</div>
);
}
}