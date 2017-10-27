import '../../lib/bootstrap-4.0.0-beta-dist/css/bootstrap.min.css';
import React from 'react';
import BrowseContentPanel from '../browseContentPanel/containers/browseContentPanel';
import Slid from '../common/slid/containers/Slid';
import Presentation from '../common/presentation/containers/Presentation';
import EditSlidePanel from '../editSlidePanel/containers/EditSlidePanel';
import './main.css';
import * as contentMapTmp from '../../source/contentMap.json';
import * as presTmp from '../../source/pres.json'
import * as Comm from '../../services/Comm.js'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalReducer from '../../reducers';
import {updateContentMap} from '../../actions';
import {updatePresentation} from '../../actions';

const store = createStore(globalReducer);

export default class Main extends React.Component{

constructor(props) {
super(props);
let onlyContent1=false;
this.state = {
contentMap:contentMapTmp,
pres:presTmp,
onlyContent:onlyContent1
};
var comm = new Comm();
comm.loadPres(0,
	function(data){
			console.log(data);
			this.state.pres=data;
		},
		function(error){
			console.error(error);
		}
	);
store.dispatch(updatePresentation(this.state.pres));
store.dispatch(updateContentMap(contentMapTmp));

}
render() {
return (
	<Provider store={store} >
		<div className='container-fluid height-100'>
			<div className="row height-100 main">
				<div className='col-md-3 col-lg-3 height-100 vertical-scroll left-panel'>
					<Presentation

						onlyContent={this.state.onlyContent}
					/>
				</div>
			<div className='col-md-6 col-lg-6 height-100 vertical-scroll center-panel ' >
				<EditSlidePanel
					contentMap={this.state.contentMap}
					/>
				

			</div>
			<div className='col-md-3 col-lg-3 height-100 vertical-scroll right-panel'>
				<BrowseContentPanel

					onlyContent={this.state.onlyContent}
				/>
			</div>
		</div>
	</div>
</Provider>
);
}
}
