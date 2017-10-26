//var Tools = require('../services/Tools.js');


const updateModelReducer=(state={presentation:{},content_map:{}},action)=>{
console.log(action);
switch(action.type)
{
case
'UPDATE_PRESENTATION' :
const newState2={presentation:action.obj,content_map:state.content_map}
return newState2;

case 'UPDATE_PRESENTATION_SLIDS' :
/*let pres=state.presentation;*/
var pres = Object.assign({}, state.presentation);
for(var i=0;i<Object.keys(state.presentation.slidArray).length;i++){
	if(pres.slidArray[i].id==action.obj.id) {
		pres.slidArray[i]=action.obj;
	}

}
const newState4={presentation:pres,content_map:state.content_map}
return newState4;

case 'UPDATE_CONTENT_MAP' :
const newState3={presentation:state.presentation,content_map:action.obj}
return newState3;


default :
return state ;
}
}

export default updateModelReducer;