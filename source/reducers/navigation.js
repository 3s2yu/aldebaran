import Navigator from '../navigator';

const initialState = Navigator.router.getStateForAction(Navigator.router.getActionForPathAndParams('Home'));

const navigation = (state = initialState, action) => {
  const newState = Navigator.router.getStateForAction(action, state);
  return newState || state;
};

export default navigation;
