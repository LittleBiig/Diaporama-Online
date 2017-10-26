const selectedReducer= (state={slid:{},content_id:{}},action) => {
 console.log(action);
 switch (action.type) {

	case 'UPDATE_SELECTED_SLID':
	const newState1={slid:action.obj,content_id:state.content_id};
	return newState1;

	case 'UPDATE_DRAGGED_ELT' :
	const newState5={slid:state.slid,content_id:action.obj}
	return newState5;

	 default:
	 return state;
 }


}
export default selectedReducer;