import _ from 'lodash';
const defaultState = {

};

export default function entities(state = defaultState, action) {

  if (action.response && action.response.entities) {
    var newState = _.mergeWith({}, state, action.response.entities, function(a, b) {
        if (b && b.constructor === Array) {
          return b;
        }
    });

    return newState;
  }

  return state;
}
