import store from "./store";
import * as actions from "./action";

store.dispatch(actions.bugAdded("bug 1"));
store.dispatch(actions.bugAdded("bug 2"));
store.dispatch(actions.bugAdded("bug 3"));
store.dispatch(actions.bugResolved(2));
store.dispatch(actions.bugDeleted(3));
console.log(store.getState());
