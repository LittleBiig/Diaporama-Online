import '../../lib/bootstrap-4.0.0-beta-dist/css/bootstrap.min.css';
import React from 'react';
import BrowseContentPanel from '../browseContentPanel/containers/browseContentPanel';
import Slid from '../common/slid/containers/Slid';
import Presentation from '../common/presentation/containers/Presentation';
import EditSlidePanel from '../editSlidePanel/containers/EditSlidePanel';
import './main.css';
import * as contentMapTmp from '../../source/contentMap.json';
import * as presTmp from '../../source/pres.json'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalReducer from '../../reducers';
import {updateContentMap} from '../../actions';

const store = createStore(globalReducer);

export default class Main extends React.Component{
constructor(props) {
super(props);
let onlyContent1=false;
this.state = {
contentMap:contentMapTmp,
pres:presTmp,
onlyContent:onlyContent1
}
store.dispatch(updateContentMap(contentMapTmp));
}
render() {
return (
	<Provider store={store} >
		<div className='container-fluid height-100'>
			<div className="row height-100 main">
				<div className='col-md-3 col-lg-3 height-100 vertical-scroll left-panel'>
					<Presentation
						title={this.state.pres.title}
						description={this.state.pres.description}
						slidArray={this.state.pres.slidArray}
						contentMap={this.state.contentMap}
						onlyContent={this.state.onlyContent}
					/>
				</div>
			<div className='col-md-6 col-lg-6 height-100 vertical-scroll center-panel ' >
				<EditSlidePanel 
					contentMap={this.state.contentMap}
					/>
				<Slid
					id="1"
					title="Slide Title"
					txt="description"
					content="2"
					contentMap={this.state.contentMap}
					displayMode="SHORT"
					onlyContent={this.state.onlyContent}
				/>

			</div>
			<div className='col-md-3 col-lg-3 height-100 vertical-scroll right-panel'>
				<BrowseContentPanel
					contentMap={this.state.contentMap}
					onlyContent={this.state.onlyContent}
				/>
			</div>
		</div>
	</div>
</Provider>
);
}
}

