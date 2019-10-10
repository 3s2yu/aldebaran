import { combineReducers } from 'redux';

import lang from './language';
import navigator from './navigation';

export default combineReducers({
  lang,
	navigator,
});
