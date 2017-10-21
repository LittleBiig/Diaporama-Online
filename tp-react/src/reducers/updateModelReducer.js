//var Tools = require('../services/Tools.js');

const updateModelReducer=(state={presentation:{},content_map:{}},action)=>{
console.log(action);
switch(action.type)
{
case 'UPDATE_PRESENTATION' :
const newState5={presentation:action.obj}
return newState5;
//TO DO
case 'UPDATE_PRESENTATION_SLIDS' :
const newState2={presentation:action.obj}
return newState2;
//TO DO
case 'UPDATE_CONTENT_MAP' :
const newState3={content_map:action.obj}
return newState3;
//TO DO
case 'ADD_CONTENT' :
const newState4={content_map:action.obj}
return newState4;
//TO DO
default :
return state ;
}
}

export default updateModelReducer;