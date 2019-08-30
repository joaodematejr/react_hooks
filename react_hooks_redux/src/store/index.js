import { createStore } from 'redux';

const INITIAL_STATE = {
  data:[
    'Python',
    'Java',
    'C++',
    'C',
    'C#',
    'Ruby',
    'PHP',
    'MySql',
    'WordPress',
    'CSS',
    'HTML'
  ],
};

function courses(state = INITIAL_STATE, action){
  switch(action.type){
    case 'ADD_COURSES':
      return {...state, data:[...state.data, action.title]};
    default:
      return state;  
  }
}

const store = createStore(courses);

export default store;