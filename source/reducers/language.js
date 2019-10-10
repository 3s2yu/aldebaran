const INITIAL_STATE = {
  lang: 'en',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
	  case 'LANGUAGE_CHANGE':
		return Object.assign({}, state, {
			lang: action.payload.language,
		});
	  default:
		return state;
	}
}
