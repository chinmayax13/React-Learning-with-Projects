//Simple names are used for understanding purpose..
const redux = require('redux');

const INITIAL_VALUE ={
  count : 0,
}

const reducer = (store= INITIAL_VALUE , action)=>{
  let newStore = store;
  if(action.type === 'INCREMENT'){
    newStore.count += 1;
  }else if(action.type === 'DECREMENT'){
    newStore.count -= 1;
  }else if(action.type === 'ADDITION'){
    newStore.count += action.payload.number;
  }
  return newStore;
}

const store = redux.createStore(reducer);

const subscriber =()=>{
  const state = store.getState();
  console.log(state);
}
store.subscribe(subscriber);

store.dispatch({type:'INCREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'DECREMENT'});
store.dispatch({type:'ADDITION' , payload:{number : 7}});
store.dispatch({type:'DECREMENT'});
